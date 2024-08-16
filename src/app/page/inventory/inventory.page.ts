import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';  // Asegúrate de que esta línea esté presente

import { Item } from '../item.model';  // También asegúrate de que el modelo esté importado

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  items: Item[] = [];

  constructor(private inventoryService: InventoryService) { }  // Esta línea debería funcionar ahora

  ngOnInit() {
    this.items = this.inventoryService.getItems();
  }
}
