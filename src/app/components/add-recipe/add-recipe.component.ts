import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { RecipeService } from '../../services/recipe.service'; 
import { InventoryService } from '../../services/inventory.service'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';

// Define la interfaz Ingredient
interface Ingredient {
  nombre: string;
  cantidad: number;
  unidad: string;
}

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  titulo: string = '';
  imageUrl: string | null = null;
  descripcion: string = '';
  categoria: string = 'desayuno';
  ingredientes: Ingredient[] = []; // Cambiado de string[] a Ingredient[]
  ingrediente: string = '';
  cantidadIngrediente: number = 1;
  unidadIngrediente: string = 'unidad'; // Nueva propiedad
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  globalItems: any[] = [];

  constructor(
    private recipeService: RecipeService,
    private inventoryService: InventoryService,
    private auth: AngularFireAuth,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.loadGlobalItems();
  }

  loadGlobalItems() {
    this.inventoryService.getGlobalItems().subscribe(items => {
      this.globalItems = items;
    });
  }

  addIngredient() {
    if (this.ingrediente.trim()) {
      const nuevoIngrediente: Ingredient = {
        nombre: this.ingrediente.trim(),
        cantidad: this.cantidadIngrediente,
        unidad: this.unidadIngrediente
      };
      this.ingredientes.push(nuevoIngrediente);
      this.ingrediente = '';
      this.cantidadIngrediente = 1;
      this.unidadIngrediente = 'unidad';
    }
  }

  addRecipe() {
    if (this.selectedFile) {
      const filePath = `recipes/${new Date().getTime()}_${this.selectedFile.name}`;
      const fileRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, this.selectedFile);

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.imageUrl = url; 
            this.saveRecipe();
          });
        })
      ).subscribe(
        () => {},
        (error) => console.error('Error al subir la imagen:', error)
      );
    } else {
      this.saveRecipe(); 
    }
  }

  saveRecipe() {
    this.auth.user.subscribe(user => {
      if (user) {
        const recipe = {
          titulo: this.titulo,
          imageUrl: this.imageUrl,
          descripcion: this.descripcion,
          categoria: this.categoria,
          ingredientes: this.ingredientes, // Ahora es un array de objetos `Ingredient`
          creadorId: user.uid
        };
        this.recipeService.addRecipe(recipe).then(() => {
          
        }).catch(error => {
          console.error('Error al agregar la receta:', error);
        });
      }
    });
  }


  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
