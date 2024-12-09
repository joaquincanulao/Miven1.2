import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-sort-menu',
  templateUrl: './sort-menu.component.html',
  styleUrls: ['./sort-menu.component.scss'],
})
export class SortMenuComponent {
  constructor(private popoverController: PopoverController) {}

  // Método para seleccionar el tipo de orden y cerrar el popover
  selectSort(type: string) {
    this.popoverController.dismiss(type);
  }
}

