import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../services/inventory.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage {
  name: string = '';
  quantity!: number;
  expirationDate: string = '';

  constructor(private inventoryService: InventoryService, private router: Router) {}

  onAddItem() {
    // Asegúrate de guardar solo la parte de la fecha sin la hora
    const formattedExpirationDate = this.expirationDate.split('T')[0];

    const newItem: Item = {
      id: Math.random().toString(),
      name: this.name,
      quantity: this.quantity,
      expirationDate: formattedExpirationDate
    };
    this.inventoryService.addItem(newItem);
    this.router.navigate(['/inventory']);
  }
}
