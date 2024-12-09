import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { InventoryService } from '../../services/inventory.service'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dessert-recipes',
  templateUrl: './dessert-recipes.component.html',
  styleUrls: ['./dessert-recipes.component.scss']
})
export class DessertRecipesComponent implements OnInit {
  dessertRecipes: any[] = [];
  filterdessert: any[] = [];
  isModalOpen = false;
  selectedRecipe: any | null = null;
  userId: string | null = null;
  availableIngredients: any[] = [];
  newComment = '';
  newRating = 1;
  favorites: any[] = [];

  constructor(
    private recipeService: RecipeService, 
    private inventoryService: InventoryService,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.loadFavorites();
      }
    });
    this.loadDessertRecipes();
  }

  // Método para cargar recetas de desayuno
  loadDessertRecipes() {
    this.recipeService.getRecipesByCategory('postre').subscribe(recipes => {
      this.dessertRecipes = recipes;
      this.filterdessert = recipes; // Inicializa el filtro con todas las recetas
    });
  }

  // Método de búsqueda que se ejecuta al escribir en la barra de búsqueda
  onSearch(event: any) {
    const searchTerm = event.target.value?.toLowerCase() || '';

    if (!searchTerm) {
      // Si no hay término de búsqueda, muestra todas las recetas
      this.filterdessert = this.dessertRecipes;
    } else {
      // Filtrar las recetas por título
      this.filterdessert = this.dessertRecipes.filter(recipe =>
        recipe.titulo.toLowerCase().includes(searchTerm)
      );
    }
  }

  openRecipeModal(recipe: any) {
    this.selectedRecipe = recipe;
    this.checkIngredientsAvailability(recipe.ingredientes);
    this.recipeService.getRecipeCommentsWithUser(recipe.id).subscribe((comments: any[]) => {
    this.selectedRecipe.comentarios = comments;});
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedRecipe = null;
  }

  // Función para verificar los ingredientes disponibles en el inventario
  checkIngredientsAvailability(recipeIngredients: { nombre: string; cantidad: number; unidad: string }[]) {
    if (this.userId) {
      this.inventoryService.getInventory(this.userId).subscribe(inventory => {
        this.availableIngredients = recipeIngredients.map(ingredient => {
          const inventoryItem = inventory.find (
            item => item.nombre.toLowerCase() === ingredient.nombre.toLowerCase()
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

  // Función para enviar comentario y calificación
  submitComment() {
    if (this.selectedRecipe && this.userId && this.newComment.trim()) {
      this.recipeService.addCommentWithRating(
        this.selectedRecipe.id, 
        this.userId, 
        this.newRating, 
        this.newComment
      ).then(() => {
        console.log('Comentario y calificación enviados');
        this.newComment = '';
        this.newRating = 1;
        this.closeModal();
      }).catch(error => {
        console.error('Error al enviar el comentario:', error);
      });
    } else {
      console.error('Faltan datos para enviar el comentario o el usuario no está autenticado');
    }
  }

  // Método para eliminar una receta
  deleteRecipe(recipeId: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta receta?')) {
      this.recipeService.deleteRecipe(recipeId).then(() => {
        console.log('Receta eliminada con éxito');
        this.loadDessertRecipes();
      }).catch(error => {
        console.error('Error al eliminar la receta:', error);
      });
    }
  }
// Método para cargar las recetas que ya están en favoritos
loadFavorites() {
  if (!this.userId) return;

  this.firestore
    .collection('usuarios')
    .doc(this.userId)
    .collection('favoritos')
    .valueChanges()
    .subscribe(favorites => {
      this.favorites = favorites;
    });
}

addToFavorites(recipeId: string, category: string) {
  if (this.userId) {
    const favoriteRecipe = {
      recipeId: recipeId,
      category: category, // Guardar la categoría
      userId: this.userId
    };
    this.firestore.collection('usuarios').doc(this.userId).collection('favoritos').add(favoriteRecipe).then(() => {
      console.log('Receta agregada a favoritos');
    }).catch(error => {
      console.error('Error al agregar a favoritos:', error);
    });
  }
}

}
