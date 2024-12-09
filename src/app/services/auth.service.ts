import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  // Método para registrar usuarios y crear su inventario
  registerUser(email: string, password: string, nombre: string) {
    this.auth.createUserWithEmailAndPassword(email, password).then(userCredential => {
      this.router.navigate(['./login']);
      const user = userCredential.user;
      if (user) {
        // Crear un documento para el usuario
        this.firestore.collection('usuarios').doc(user.uid).set({
          nombre: nombre,
          correo_electronico: email,
          fecha_registro: new Date()
        }).then(() => {
          // Crear una subcolección de inventario para el usuario recién registrado
          const inventarioRef = this.firestore.collection('usuarios').doc(user.uid).collection('inventario');
          
          // Inicializar el inventario con algunos productos predeterminados o vacío
          inventarioRef.add({
            nombre_producto: 'Producto Ejemplo',
            cantidad: 0,
            unidad_medida: 'unidades',
            fecha_caducidad: new Date(),
            categoria: 'General'
          });
        });
      }
    }).catch(error => {
      console.error('Error en el registro:', error);
    });
  }

  // Método para iniciar sesión de usuario
  async loginUser(email: string, password: string) {
    try {
      // Intentar iniciar sesión con el correo y la contraseña
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      
      // Navegar a la página principal solo si la autenticación fue exitosa
      this.router.navigate(['./home']);
      return userCredential;
    } catch (error) {
      // Manejar errores de inicio de sesión
      console.error('Error en el inicio de sesión:', error);
      throw error; // Lanza el error para que el componente que llama maneje el mensaje de error
    }
  }

       // Método para iniciar sesión con Google y registrar al usuario en Firestore si es la primera vez
  async loginWithGoogle() {
    try {
      const result = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      const user = result.user;

      if (user) {
        // Verificar si el usuario ya está registrado en Firestore
        const userDocRef = this.firestore.collection('usuarios').doc(user.uid);
        const userDoc = await userDocRef.get().toPromise();

        // Verificar si el documento existe
        if (userDoc && !userDoc.exists) {
          // Registrar al usuario en la colección 'usuarios' si no existe
          await userDocRef.set({
            nombre: user.displayName,
            correo_electronico: user.email,
            fecha_registro: new Date()
          });
          
          // Inicializar inventario para el nuevo usuario
          const inventarioRef = userDocRef.collection('inventario');
          await inventarioRef.add({
            nombre_producto: 'Producto Ejemplo',
            cantidad: 0,
            unidad_medida: 'unidades',
            fecha_caducidad: new Date(),
            categoria: 'General'
          });
        }
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
  
  getUserData(uid: string) {
return this.firestore.collection('usuarios').doc(uid).valueChanges();
  }

  getInfoUser() {
    return this.auth.authState;

  }
}