import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { InventoryService } from '../../services/inventory.service'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-breakfast-recipes',
  templateUrl: './breakfast-recipes.component.html',
  styleUrls: ['./breakfast-recipes.component.scss']
})
export class BreakfastRecipesComponent implements OnInit {
  breakfastRecipes: any[] = [];
  filteredBreakfastRecipes: any[] = [];
  isModalOpen = false;
  selectedRecipe: any | null = null;
  userId: string | null = null;
  availableIngredients: any[] = [];
  newComment = '';
  newRating: number = 1;
  favorites: any[] = [];

  constructor(
    private recipeService: RecipeService, 
    private inventoryService: InventoryService,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router // Agregar el servicio Router
  ) {}

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.loadFavorites();
      }
    });
    this.loadBreakfastRecipes();
  }

  loadBreakfastRecipes() {
  this.recipeService.getRecipesByCategory('desayuno').subscribe(recipes => {
    this.breakfastRecipes = recipes;
    this.filteredBreakfastRecipes = recipes;

    const ratingPromises = this.breakfastRecipes.map(recipe => 
      this.loadRecipeRatings(recipe.id).then(averageRating => {
        recipe.averageRating = averageRating;
      })
    );

    Promise.all(ratingPromises).then(() => {
      // Ordenar recetas por calificación promedio
      this.sortRecipesByRating();
    });
  });
}
            
  sortRecipesByRating() {
    this.filteredBreakfastRecipes.sort((a, b) => {
      return (b.averageRating || 0) - (a.averageRating || 0); 
      });
  }

  onSearch(event: any) {
    const searchTerm = event.target.value?.toLowerCase() || '';
    if (!searchTerm) {
      this.filteredBreakfastRecipes = this.breakfastRecipes;
    } else {
      this.filteredBreakfastRecipes = this.breakfastRecipes.filter(recipe =>
        recipe.titulo.toLowerCase().includes(searchTerm)
      );
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

  closeModal() {
    this.isModalOpen = false;
    this.selectedRecipe = null;
  }

  // Verificar la disponibilidad de los ingredientes en el inventario
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

  rateRecipe(rating: number) {
    this.newRating = rating; 
  }

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

  loadRecipeRatings(recipeId: string): Promise<number> {
    return new Promise((resolve) => {
      this.firestore.collection('recetas').doc(recipeId).collection('comentarios')
        .valueChanges().subscribe((comments: any[]) => {
          if (comments.length > 0) {
            const totalRating = comments.reduce((acc, comment) => acc + comment.rating, 0);
            const averageRating = totalRating / comments.length;
            resolve(averageRating);
          } else {
            resolve(0); // Sin calificaciones
          }
        });
    });
  }


  deleteRecipe(recipeId: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta receta?')) {
      this.recipeService.deleteRecipe(recipeId).then(() => {
        console.log('Receta eliminada con éxito');
        this.loadBreakfastRecipes();
      }).catch(error => {
        console.error('Error al eliminar la receta:', error);
      });
    }
  }

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
    if (this.isFavorite(recipeId)) {
        console.log('La receta ya está en favoritos');
        return;
      }

      const favoriteRecipe = {
        recipeId: recipeId,
        category: category,
        userId: this.userId
      };
      this.firestore.collection('usuarios').doc(this.userId).collection('favoritos').add(favoriteRecipe).then(() => {
        console.log('Receta agregada a favoritos');
      }).catch(error => {
        console.error('Error al agregar a favoritos:', error);
      });
    }
  }
  isFavorite(recipeId: string): boolean {
    return this.favorites.some(fav => fav.recipeId === recipeId);
  }
  navigateToEdit(recipeId: string) {
    // Navegar a la página de edición de recetas
    this.router.navigate(['/edit-recipe', recipeId]);
  }
  
}
