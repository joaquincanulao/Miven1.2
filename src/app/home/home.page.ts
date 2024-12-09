import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tips: string[] = [];
  currentTip: string = '';
  popularRecipe: any = null;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.loadTips(); // Cargar consejos desde Firestore
    setInterval(() => {this.showRandomTip();
                      }, 10000); // esto cambia consejo cada 10s...
    this.loadPopularRecipe();
  }

  loadTips() {
    console.log('Intentando cargar los consejos...');
    this.firestore.collection('consejos').valueChanges().subscribe({
      next: (data: any[]) => {
        console.log('Datos recibidos:', data);
        this.tips = data.map(item => item.e);
        this.showRandomTip();
      },
      error: (error) => {
        console.error('Error al cargar los consejos:', error);
      }
    });
  }
  // Mostrar un consejo aleatorio
  showRandomTip() {
    if (this.tips.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.tips.length);
      this.currentTip = this.tips[randomIndex];
    }
  }
  loadPopularRecipe() {
    this.firestore
      .collection('recetas', ref => ref.orderBy('rating', 'desc').limit(1))
      .valueChanges({ idField: 'id' })
      .subscribe({
        next: (data: any[]) => {
          if (data.length > 0) {
            this.popularRecipe = data[0];
            console.log('Receta más popular:', this.popularRecipe);
          } else {
            console.warn('No se encontraron recetas populares.');
          }
        },
        error: (error) => {
          console.error('Error al cargar la receta más popular:', error);
        }
      });
  }
}
