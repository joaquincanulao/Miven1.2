import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService, Recipe } from '../services/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  recipeId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {
    this.recipeForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      ingredientes: this.fb.array([]), // FormArray para ingredientes
    });
  }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    console.log('Recibiendo ID desde la ruta:', this.recipeId);
    if (this.recipeId) {
      this.loadRecipe();
    } else {
      console.error('No se recibió ningún ID válido.');
    }
  }

  /**
   * Método auxiliar para obtener el FormArray de ingredientes
   */
  get ingredientes(): FormArray {
    return this.recipeForm.get('ingredientes') as FormArray;
  }

  /**
   * Cargar la receta desde el servicio y poblar el formulario
   */
  loadRecipe(): void {
    this.recipeService.getRecipeById(this.recipeId!).subscribe((recipe) => {
      if (recipe) {
        this.populateForm(recipe);
      }
    });
  }

  /**
   * Poblar el formulario con los datos de la receta
   */
  populateForm(recipe: Recipe): void {
    this.recipeForm.patchValue({
      titulo: recipe.titulo,
      descripcion: recipe.descripcion,
      categoria: recipe.categoria,
    });

    // Limpiar ingredientes previos y agregar los nuevos
    this.ingredientes.clear();
    recipe.ingredientes.forEach((ingredient) => {
      this.ingredientes.push(
        this.fb.group({
          nombre: [ingredient.nombre, Validators.required],
          cantidad: [ingredient.cantidad, [Validators.required, Validators.min(1)]],
          unidad: [ingredient.unidad, Validators.required],
        })
      );
    });
  }

  /**
   * Agregar un nuevo ingrediente al FormArray
   */
  addIngredient(): void {
    this.ingredientes.push(
      this.fb.group({
        nombre: ['', Validators.required],
        cantidad: [1, [Validators.required, Validators.min(1)]],
        unidad: ['', Validators.required],
      })
    );
  }

  /**
   * Eliminar un ingrediente del FormArray
   * @param index Índice del ingrediente a eliminar
   */
  removeIngredient(index: number): void {
    this.ingredientes.removeAt(index);
  }

  /**
   * Guardar los cambios de la receta
   */
  submitForm(): void {
    if (this.recipeForm.valid && this.recipeId) {
      this.recipeService.updateRecipe(this.recipeId, this.recipeForm.value).then(() => {
        console.log('Receta actualizada con éxito');
        this.router.navigate(['/recetas']);
      }).catch((error) => {
        console.error('Error al actualizar la receta:', error);
      });
    } else {
      console.error('Formulario inválido o ID de receta no encontrado');
    }
  }
}
