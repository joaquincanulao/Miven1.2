import { Injectable } from '@angular/core';
import { Item } from '../item.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private inventory: Item[] = [];

  constructor() { }

  addItem(item: Item) {
    this.inventory.push(item);
  }

  getItems(): Item[] {
    return [...this.inventory];
  }
}