import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RecipeService } from '../../services/recipe.service';
import { InventoryService } from '../../services/inventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  userId: string | null = null;
  favorites: any[] = []; // Aquí se almacenan todas las recetas favoritas
  filteredFavorites: any[] = []; // Recetas filtradas por categoría
  isModalOpen = false;
  selectedRecipe: any | null = null;
  selectedCategory = 'desayuno'; // Categoría seleccionada por defecto
  isAuthenticated: boolean = false;
  availableIngredients: any[] = [];

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private recipeService: RecipeService, 
    private inventoryService: InventoryService,
    private router: Router
  ) {
    console.log('en construct');
  }

  ngOnInit(): void {
    this.auth.authState.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log('isAuthenticated subscribe :: ', this.isAuthenticated);
      if (this.isAuthenticated) {
        if (user && user.uid) {
          this.userId = user.uid;
          this.filterFavorites();
        }
      }
    });
  }

  // Método para filtrar las recetas según la categoría seleccionada
  filterFavorites() {
    console.log('this === ', this.userId);

    if (this.userId) {   
      this.filteredFavorites = [];
      const favoritos = this.firestore.collection('usuarios').doc(this.userId).collection('favoritos',
        ref => ref.where('category', '==', this.selectedCategory)
      ).get().forEach((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const datos = doc.data();
      
          // Verifica si 'recipeId' existe en el documento
          if (datos['recipeId']) {
            console.log('Procesando receta con ID:', datos['recipeId']);
            
            this.firestore.collection('recetas').doc(datos['recipeId']).get().forEach(
              (rec) => {
                if (rec.exists) {
                  const d: any = rec.data();
                  d.id = datos['recipeId']; // Asigna el ID real de la receta
                  d.creadorId = datos['creadorId'] || null; // Si existe el creadorId
                  this.filteredFavorites.push(d);
                } else {
                  console.warn(`La receta con ID ${datos['recipeId']} no existe.`);
                }
              }
            );
          } else {
            console.warn(`El documento favorito con ID ${doc.id} no tiene un campo 'recipeId'.`);
          }
        });
      });   
    }
  }

  openRecipeModal(recipe: any) {
    this.selectedRecipe = recipe;
    this.checkIngredientsAvailability(recipe.ingredientes);
    this.recipeService.getRecipeCommentsWithUser(recipe.id).subscribe((comments: any[]) => {
      this.selectedRecipe.comentarios = comments;
    });
    this.isModalOpen = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
    this.selectedRecipe = null;
  }

  removeFromFavorites(recipeId: string) {
    console.log('recipeId :: ', recipeId);
    if (this.userId) {  
      this.firestore.collection('usuarios').doc(this.userId).collection('favoritos').doc(recipeId).delete();
      this.filterFavorites();
    }
  }

  checkIngredientsAvailability(recipeIngredients: { nombre: string; cantidad: number; unidad: string }[]) {
    if (this.userId) {
      this.inventoryService.getInventory(this.userId).subscribe(inventory => {
        this.availableIngredients = recipeIngredients.map(ingredient => {
          const inventoryItem = inventory.find(item => 
            item?.nombre?.toLowerCase() === ingredient?.nombre?.toLowerCase()
          );
          return {
            nombre: ingredient.nombre,
            cantidad: ingredient.cantidad,
            unidad: ingredient.unidad,
            disponible: inventoryItem ? inventoryItem.cantidad >= ingredient.cantidad : false
          };
        });
      });
    }
  }

  isFavorite(recipeId: string): boolean {
    return this.favorites.some(fav => fav.recipeId === recipeId);
  }

  navigateToEdit(recipeId: string) {
    console.log('ID de la receta a editar:', recipeId);
    this.router.navigate(['/edit-recipe', recipeId]);
  }
}

