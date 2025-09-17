import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { Firestore, collectionData, collection, addDoc, doc, setDoc, query, orderBy, limit, serverTimestamp, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Firebase {

private auth = inject(Auth);
private firestore = inject(Firestore);
private logsColl = collection(this.firestore, 'logs')



  // ====================== Acceso ======================
 async ingreso(user: Usuario) {
    await this.registrarLog(user);
    return signInWithEmailAndPassword(this.auth, user.email, user.contraseña);
  }

  // ====================== Registro ======================
  async registro(user: Usuario) {
    await this.registrarLog(user);
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

    // ====================== RegistrarLog ======================
  async registrarLog(usuario: Usuario) {
  const log = {
    usuario,
    fechaIngreso: serverTimestamp()
  };

  // Creamos un DocumentReference con ID automático en la colección 'logs'
  const logRef = doc(this.logsColl);

  try {
    await setDoc(logRef, log); // Guardamos el log
    console.log('ANIM DIJO 🗣: ', logRef.id);
    return logRef;
  } catch (e: any) {
    return console.error(e.message);
  }
}

  // ====================== Traer últimos logs ======================

  async recuperarLogs(cantidad: number){
    const queryLogs = query(collection(this.firestore, 'logs'), orderBy('fechaIngreso', 'desc'), limit(cantidad));
    let formatLogs = await getDocs(queryLogs);
    let listaLogs = formatLogs.docs.map(doc => doc.data());

    return listaLogs;
  }
}
