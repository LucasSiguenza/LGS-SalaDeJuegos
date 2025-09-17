import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Firebase {

  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {}

  // ====================== Acceso ======================
  ingreso(user: Usuario) {
    return signInWithEmailAndPassword(this.auth, user.email, user.contraseña);
  }

  // ====================== Registro ======================
  registro(user: Usuario) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.contraseña);
  }

  // ====================== Actualizar ======================
  actualizarUsuario(nombreUsuario: string) {
    return updateProfile(this.auth.currentUser!, { displayName: nombreUsuario });
  }

  // ====================== Base de datos ======================
  setDocument(path: string, data: any) {
    return setDoc(doc(this.firestore, path), data);
  }
    // ====================== Cierre de sesión ======================

    egreso(){
      return signOut(this.auth);
    }

    // ====================== Usuario Actual ======================

    get usuarioActual(){
      return this.auth.currentUser;
    }

}
