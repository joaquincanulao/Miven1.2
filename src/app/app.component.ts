import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importar NavController
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: any = [
    { title: 'Inicio', url: '/folder/inbox', icon: 'Home' },
    { title: 'Inventario', url: '/inventory', icon: 'clipboard' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Recetas', icon: 'restaurant',
      items: [
        {title: 'Desayuno', url: '/desayuno', icon: 'restaurant'},
        {title: 'Almuerzo', url: '/almuerzo', icon: 'restaurant'},
        {title: 'Cena', url: '/cena', icon: 'restaurant'},
        {title: 'Postres', url: '/postres', icon: 'restaurant'}
      ]
     },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    ];
  constructor(private navCtrl: NavController) {}  // Inyectar NavController

    navigateToAlmuerzo() {
      this.navCtrl.navigateForward('/almuerzo');  // Navegar a la página de Almuerzo
    }
    navigateToCena() {
      this.navCtrl.navigateForward('/cena');  // Navegar a la página de Cena
    }
    navigateToDesayunos() {
      this.navCtrl.navigateForward('/desayunos');  // Navegar a la página de Desayunos
    }
    navigateToPostres() {
      this.navCtrl.navigateForward('/postres');  // Navegar a la página de Desayunos
    }
}

 

