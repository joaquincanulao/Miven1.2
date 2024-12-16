import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.requestPermission();
  }

  // Método para registrar usuarios
  async registerUser(email: string, password: string, nombre: string) {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (user) {
        // Crear un documento para el usuario
        await this.firestore.collection('usuarios').doc(user.uid).set({
          nombre: nombre,
          correo_electronico: email,
          fecha_registro: new Date(),
        });

        // Capturar y registrar el token FCM
        try {
          const messaging = getMessaging();
          const fcmToken = await getToken(messaging, { vapidKey: 'TU_CLAVE_PUBLICA_VAPID' });

          if (fcmToken) {
            await this.firestore.collection('usuarios').doc(user.uid).update({
              fcmToken: fcmToken,
            });
            console.log('Token FCM registrado:', fcmToken);
          } else {
            console.warn('No se pudo obtener el token FCM.');
          }
        } catch (error) {
          console.error('Error al registrar el token FCM:', error);
        }

        // Crear una subcolección de inventario para el usuario recién registrado
        const inventarioRef = this.firestore.collection('usuarios').doc(user.uid).collection('inventario');

        // Inicializar el inventario con algunos productos predeterminados o vacío
        await inventarioRef.add({
          nombre_producto: 'Producto Ejemplo',
          cantidad: 0,
          unidad_medida: 'unidades',
          fecha_caducidad: new Date(),
          categoria: 'General',
        });
      }

      this.router.navigate(['./login']);
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  }

  // Método para iniciar sesión de usuario
  async loginUser(email: string, password: string) {
    try {
      // Intentar iniciar sesión con el correo y la contraseña
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
  
      if (user) {
        // Capturar y registrar el token FCM
        await this.registerFCMToken(user.uid);
      }
  
      // Navegar a la página principal solo si la autenticación fue exitosa
      this.router.navigate(['./home']);
      return userCredential;
    } catch (error) {
      // Manejar errores de inicio de sesión
      console.error('Error en el inicio de sesión:', error);
      throw error; // Lanza el error para que el componente que llama maneje el mensaje de error
    }
  }

  // Método para iniciar sesión con Google
 // Método para iniciar sesión con Google y registrar al usuario en Firestore si es la primera vez
async loginWithGoogle() {
  try {
    const result = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = result.user;

    if (user) {
      const userDocRef = this.firestore.collection('usuarios').doc(user.uid);
      const userDoc = await userDocRef.get().toPromise();

      if (userDoc && !userDoc.exists) {
        // Registrar al usuario en la colección 'usuarios' si no existe
        await userDocRef.set({
          nombre: user.displayName,
          correo_electronico: user.email,
          fecha_registro: new Date(),
        });

        // Inicializar inventario para el nuevo usuario
        const inventarioRef = userDocRef.collection('inventario');
        await inventarioRef.add({
          nombre_producto: 'Producto Ejemplo',
          cantidad: 0,
          unidad_medida: 'unidades',
          fecha_caducidad: new Date(),
          categoria: 'General',
        });
      }

      // Registrar el token FCM
      await this.registerFCMToken(user.uid);
    }

    // Navegar a home si el inicio de sesión con Google es exitoso
    this.router.navigate(['./home']);
    return result;
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error);
    throw error;
  }
}

  // Método para cerrar sesión
  logoutUser() {
    return this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  // Método para obtener el usuario autenticado actual
  getCurrentUser() {
    return this.auth.currentUser;
  }

  // Obtener datos del usuario por ID
  getUserData(uid: string) {
    return this.firestore.collection('usuarios').doc(uid).valueChanges();
  }

  // Obtener el estado de autenticación del usuario actual
  getInfoUser() {
    return this.auth.authState;
  }

  // Método separado para registrar el token FCM
  async registerFCMToken(uid: string) {
    try {
      const messaging = getMessaging();
      const token = await getToken(messaging, { vapidKey: 'TU_CLAVE_PUBLICA_VAPID' });

      if (token) {
        await this.firestore.collection('usuarios').doc(uid).update({
          fcmToken: token,
        });
        console.log('Token FCM registrado:', token);
      } else {
        console.log('No se pudo obtener el token.');
      }
    } catch (error) {
      console.error('Error al registrar el token FCM:', error);
    }
  }
  async requestPermission() {
    try {
      const messaging = getMessaging();
      await Notification.requestPermission();
      console.log('Permiso de notificaciones concedido.');
    } catch (error) {
      console.error('Permiso de notificaciones denegado:', error);
    }
  }
}
