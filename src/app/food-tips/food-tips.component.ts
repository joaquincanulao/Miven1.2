import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-tips',
  templateUrl: './food-tips.component.html',
  styleUrls: ['./food-tips.component.scss']
})
export class FoodTipsComponent implements OnInit {
  tips: string[] = [
    'Guarda las frutas y verduras en compartimentos separados del refrigerador.',
    'Envuelve las hierbas frescas en una toalla de papel húmeda para prolongar su frescura.',
    'Congela alimentos sobrantes en porciones individuales para evitar desperdicio.',
    'Usa recipientes herméticos para guardar productos secos como arroz o harina.',
    'Mantén los huevos en su caja original dentro del refrigerador para evitar la contaminación.'
  ];

  currentTip: string = '';

  ngOnInit() {
    this.showRandomTip();
    // Cambiar el consejo cada 10 segundos
    setInterval(() => {
      this.showRandomTip();
    }, 10000);
  }

  showRandomTip() {
    const randomIndex = Math.floor(Math.random() * this.tips.length);
    this.currentTip = this.tips[randomIndex];
  }
}

