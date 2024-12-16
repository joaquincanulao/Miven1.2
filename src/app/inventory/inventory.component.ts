import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { PopoverController } from '@ionic/angular';
import { SortMenuComponent } from '../sort-menu/sort-menu.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  inventoryItems: any[] = [];
  sortedInventory: any[] = [];
  expiredItems: any[] = [];
  expiringSoonItems: any[] = [];
  userId: string | null = null;
  editItemCantidad: number | null = null;
  editItemId: string | null = null;
  isEditModalOpen = false;


  constructor(private inventoryService: InventoryService, 
              private auth: AngularFireAuth,
              private popoverController: PopoverController,
              private alertController: AlertController
            ) {}

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.loadInventory();
        }
    });

    this.requestNotificationPermission(); 
  }

  // Método para cargar el inventario del usuario
  loadInventory() {
    if (this.userId) {
      this.inventoryService.getInventory(this.userId).subscribe(items => {
        this.inventoryItems = items;
        this.sortInventory('alphabetical');
        this.checkExpiringItems();
        });
    }
  }

  
  async openSortMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: SortMenuComponent,
      event: ev,
      translucent: true
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();
    if (data) {
      this.sortInventory(data);
    }
  }

  // Método para ordenar el inventario...
  sortInventory(type: string) {
    if (type === 'alphabetical') {
      this.sortedInventory = [...this.inventoryItems].sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (type === 'expiration') {
      this.sortedInventory = [...this.inventoryItems].sort((a, b) => {
        return new Date(a.fechaVencimiento).getTime() - new Date(b.fechaVencimiento).getTime();
      });
    }
  }


  // Solicitar permiso de notificación al usuario:3
  requestNotificationPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Permiso para notificaciones otorgado');
        } else {
          console.log('Notificaciones bloqueadas');
        }
      });
    }
  }

  // Enviar notificación para ítems próximos a vencer...
  sendNotification(itemName: string, expirationDate: string) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Producto por vencer', {
        body: `El ítem ${itemName} vence el ${expirationDate}.`,
        icon: 'assets/icon/alert.png' // Cambia por el ícono que prefieras
      });
    }
  }

  // Método para eliminar un ítem del inventario
  deleteItem(itemId: string) {
    if (this.userId && confirm('¿Estás seguro de que deseas eliminar este ítem del inventario?')) {
      this.inventoryService.deleteItemFromInventory(itemId, this.userId).then(() => {
        console.log('Ítem eliminado con éxito');
        this.loadInventory();
      }).catch(error => {
        console.error('Error al eliminar el ítem:', error);
      });
    }
  }

 startEditItem(item: any) {
  this.editItemCantidad = item.cantidad;
  this.editItemId = item.id;
  this.isEditModalOpen = true;
}

closeEditModal() {
  this.isEditModalOpen = false;
  this.editItemCantidad = null;
  this.editItemId = null;
}

updateItemQuantity() {
  if (this.userId && this.editItemId && this.editItemCantidad != null) {
    this.inventoryService.updateItemQuantity(this.userId, this.editItemId, this.editItemCantidad).then(() => {
      console.log('Cantidad actualizada con éxito');
      this.closeEditModal();  // Cerrar el modal después de la actualización
    }).catch(error => {
      console.error('Error al actualizar la cantidad:', error);
    });
  }
}

convertDate(fecha: string | Date): Date {
  if (fecha instanceof Date) {
    return fecha; // Si ya es un objeto Date, regresarlo directamente
  }

  if (typeof fecha === 'string') {
    const parts = fecha.split('-');
    if (parts.length === 3) {
      // Convertir de Dias, meses y años a años, meses y días.
      const [day, month, year] = parts.map(part => parseInt(part, 10));
      return new Date(year, month - 1, day);
    }
  }

  console.error('Formato de fecha inválido:', fecha);
  return new Date(NaN); // Retornar fecha inválida si no coincide el formato
}


// Verificar productos vencidos y por vencer
checkExpiringItems() {
  const today = new Date();
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(today.getDate() + 7);

  console.log('Hoy es:', today);
  console.log('Una semana desde hoy es:', oneWeekFromNow);

  this.expiredItems = this.inventoryItems.filter(item => {
    const expiryDate = this.convertDate(item.fechaVencimiento);

    if (isNaN(expiryDate.getTime())) {
      console.warn(`Fecha inválida para el ítem ${item.nombre}:`, item.fechaVencimiento);
      return false;
    }

    return expiryDate < today; // Productos ya vencidos
  });

  this.expiringSoonItems = this.inventoryItems.filter(item => {
    const expiryDate = this.convertDate(item.fechaVencimiento);

    if (isNaN(expiryDate.getTime())) {
      console.warn(`Fecha inválida para el ítem ${item.nombre}:`, item.fechaVencimiento);
      return false;
    }

    return expiryDate >= today && expiryDate <= oneWeekFromNow; // Por vencer en 7 días
  });

  console.log('Productos vencidos:', this.expiredItems);
  console.log('Productos por vencer:', this.expiringSoonItems);

  this.showAlerts();
}

// Mostrar alertas para productos vencidos y por vencer
async showAlerts() {
  if (this.expiredItems.length > 0) {
    const alert = await this.alertController.create({
      header: 'Productos Vencidos',
      message: `Tienes ${this.expiredItems.length} producto(s) vencido(s):${this.expiredItems.map(item => item.nombre).join(', ')}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  if (this.expiringSoonItems.length > 0) {
    const alert = await this.alertController.create({
      header: 'Productos por Vencer',
      message: `Tienes ${this.expiringSoonItems.length} producto(s) que vencerán pronto:<br>${this.expiringSoonItems.map(item => item.nombre).join(', ')}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
processItems(expiredItems: string[], expiringItems: string[]): void {
  console.log("Expired Items:", expiredItems);
  console.log("Expiring Items:", expiringItems);
}
}