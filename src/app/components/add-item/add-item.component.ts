import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  predefinedItems: string[] = [];
  availableItems: string[] = [];
  selectedItem: string | null = null;
  isNewItem: boolean = false;
  newItem: any = {
    nombre: '',
    cantidad: 0,
    fechaVencimiento: '',
    unidadMedida: ''
  };
  userId: string | null = null;
  capturedImage: string | null = null;


  constructor(private inventoryService: InventoryService, private auth: AngularFireAuth, private firestore: AngularFirestore) {
    this.auth.user.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }



  ngOnInit() {
    this.loadAvailableItems();
  }

  async openCamera() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
      });
      this.capturedImage = `data:image/jpeg;base64,${image.base64String}`;
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }


  // Cargar los ítems disponibles desde Firestore...
  loadAvailableItems() {
    this.firestore.collection('items').valueChanges({ idField: 'id' }).subscribe((items: any[]) => {
      this.availableItems = [...this.predefinedItems, ...items.map(item => item.nombre)];
    });
  }

  formatFechaVencimiento(fecha: string): string {
    const date = new Date(fecha);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  onItemSelected(event: any) {
    const selectedItem = event.detail.value;
    if (selectedItem === 'Otro') {
      this.isNewItem = true;
      this.newItem.nombre = '';  
    } else {
      this.isNewItem = false;
      this.newItem.nombre = selectedItem;  
    }
  }

  addItem() {
    if (!this.isNewItem && this.selectedItem) {
      this.newItem.nombre = this.selectedItem;
    }

    if (this.userId && this.newItem.nombre && this.newItem.cantidad > 0 && this.newItem.unidadMedida  && this.newItem.fechaVencimiento) {
      const formattedFecha = this.formatFechaVencimiento(this.newItem.fechaVencimiento); // Formatear la fecha
      
      const itemToSave = {
        nombre: this.newItem.nombre,
        cantidad: this.newItem.cantidad,
        fechaVencimiento: formattedFecha,
        unidadMedida: this.newItem.unidadMedida,
        imageUrl: this.capturedImage // Agregar la imagen capturada
      };

      this.inventoryService.addItemToInventory(itemToSave, this.userId).then(() => {
        if (this.isNewItem) {
          this.addItemToFirestore(this.newItem.nombre);
        }
        console.log('Ítem agregado con éxito');
        this.resetForm();
      }).catch(error => {
        console.error('Error al agregar el ítem:', error);
      });
    } else {
      console.error('Todos los campos son obligatorios');
    }
  }

  // Guardar un ítem nuevo en Firestore
  addItemToFirestore(nombre: string) {
    this.firestore.collection('items').doc(nombre).set({ nombre });
  }

  // Método para resetear el formulario
  resetForm() {
    this.newItem = { nombre: '', cantidad: 0, fechaVencimiento: '', unidadMedida:'' };
    this.selectedItem = null;
    this.isNewItem = false;
    this.capturedImage = null;
  }
}