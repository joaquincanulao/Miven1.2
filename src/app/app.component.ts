import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importar NavController
import { FirebaseMessaging } from '@capacitor-firebase/messaging';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getMessaging, onMessage } from "firebase/messaging";
import { Platform } from '@ionic/angular';
import { NotificationsPushService } from './services/notifications-push.service';
import { Capacitor } from '@capacitor/core';
import { MenuController } from '@ionic/angular';
import { PushNotifications } from "@capacitor/push-notifications";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  userId: string | null = null;
  public appPages: any = [
    { title: 'Inicio', url: '/home', icon: 'Home' },
    { title: 'Inventario', url: '/inventory', icon: 'clipboard' },
    { title: 'Favoritos', url: '/favorites', icon: 'heart' },
    { title: 'Recetas', icon: 'restaurant',
      items: [
        {title: 'Desayuno', url: '/breakfast-recipes', icon: 'restaurant'},
        {title: 'Almuerzo', url: '/lunch-recipes', icon: 'restaurant'},
        {title: 'Cena', url: '/dinner-recipes', icon: 'restaurant'},
        {title: 'Postres', url: '/dessert-recipes', icon: 'restaurant'},
        {title: 'Agregar recetas', url: '/add-recipe', icon: 'add'},
      ]
     },
     { title: 'Perfil', url: '/perfilusuario', icon: 'person' },
    { title: 'Cerrar sesión', url: '/login', icon: 'close' },
  ];

  constructor(
    private navCtrl: NavController,
    private auth: AngularFireAuth, 
    private firestore: AngularFirestore,
    private platform: Platform,
    private notificationsPushService: NotificationsPushService,
    private menuController: MenuController,
    private afAuth: AngularFireAuth, private router: Router
  ) {
    this.initializeFCM();
    this.listenToMessages();
    this.init();
    this.initializeNotifications();
    
  }
  navigateToAlmuerzo() {
    this.navCtrl.navigateForward('/almuerzo');
  }

  navigateToCena() {
    this.navCtrl.navigateForward('/cena');
  }

  navigateToDesayunos() {
    this.navCtrl.navigateForward('/desayunos');
  }

  navigateToPostres() {
    this.navCtrl.navigateForward('/postres');
  }

init() {
  if (Capacitor.isNativePlatform()) { 

    this.notificationsPushService.init();
  }

}

ngOnInit() {
  this.afAuth.authState.subscribe((user) => {
    if (user) {
      console.log('Usuario autenticado:', user);
      this.router.navigate(['/home']); // Cambia '/home' por la ruta de tu página principal
    } else {
      console.log('No hay usuario autenticado.');
      this.router.navigate(['/login']); // Cambia '/login' por tu ruta de inicio de sesión
    }
  });
}


  initializeApp() {
    this.platform.ready().then(() => {
      this.requestNotificationPermission();

      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/firebase-messaging-sw.js')
          .then((registration) => {
            console.log('Service Worker registrado:', registration);
          }).catch((error) => {
            console.log('Error al registrar el Service Worker:', error);
          });
      }
 

    });
}


  requestNotificationPermission() {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Permiso para notificaciones concedido');
      } else {
        console.error('Permiso para notificaciones denegado');
      }
    });
  }

  listenToMessages() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Mensaje recibido en primer plano: ', payload);
      // Aquí puedes manejar cómo se mostrarán las notificaciones en la interfaz
    });
  }




  async initializeFCM() {
    this.auth.user.subscribe(async (user) => {
      if (user) {
        this.userId = user.uid;

        const permission = await FirebaseMessaging.requestPermissions();
        if (permission.receive === 'granted') {
          const token = await FirebaseMessaging.getToken();
          console.log('FCM Token:', token);

          // Guardar el token FCM en Firestore para el usuario actual
          this.firestore.collection('usuarios').doc(this.userId).set(
            { fcmToken: token }, { merge: true }
          );

          // Escuchar notificaciones recibidas
          FirebaseMessaging.addListener('notificationReceived', (notification: any) => {
            console.log('Notificación recibida:', notification);
            // Aquí puedes implementar lógica para mostrar la notificación
          });

          // Escuchar cuando se realiza una acción en la notificación
          FirebaseMessaging.addListener('notificationActionPerformed', (notification: any) => {
            console.log('Acción de notificación:', notification);
            // Aquí puedes manejar la interacción con la notificación
          });
        } else {
          console.log('Permisos de notificación denegados');
        }
      }
    });
  }

  async closeMenu() {
    await this.menuController.close();
  }

  initializeNotifications() {
    PushNotifications.requestPermissions().then((permission) => {
      if (permission.receive === "granted") {
        PushNotifications.register();
      }
    });

    // Escucha notificaciones recibidas
    PushNotifications.addListener("pushNotificationReceived", (notification) => {
      console.log("Notificación recibida:", notification);
    });

    // Escucha acciones de notificaciones
    PushNotifications.addListener("pushNotificationActionPerformed", (action) => {
      console.log("Acción de notificación realizada:", action);
    });
  }

}
