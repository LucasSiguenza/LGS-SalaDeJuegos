import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Login } from "./page/login/login";
import { Bienvenido } from "./comps/bienvenido/bienvenido";
import { Home } from "./page/home/home";
import { Usuario } from './services/usuario';
import { Header } from "./comps/header/header";

@Component({
  selector: 'app-root',
  imports: [FormsModule, Login, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   protected readonly title = signal('Lucas Sigüenza');

  constructor(private serviceUsuario: Usuario){

    console.log(serviceUsuario.usuarioActual);

    
  }
}
