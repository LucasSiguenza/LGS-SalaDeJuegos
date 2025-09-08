import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Usuario {
  public usuarioActual! : string;

  constructor(){
    this.usuarioActual = "nobody"
  }

  loguear(usuario: string, contraseña: string){
    if(usuario == "admin" && contraseña == "admin"){
      console.log("Logea3");
    }
    return true
  }

  currentUser(){
    return this.usuarioActual;
  }
}
