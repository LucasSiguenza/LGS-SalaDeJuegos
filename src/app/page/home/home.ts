import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Header } from "../../comps/header/header";
import { Footer } from "../../comps/footer/footer";
import { JuegoUno } from "./juego-uno/juego-uno";
import { JuegoDos } from "./juego-dos/juego-dos";
import { JuegoTres } from "./juego-tres/juego-tres";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, JuegoUno, JuegoDos, JuegoTres],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 juegoActivo: string | null = null;

  cargarJuego(juego: string) {
    this.juegoActivo = juego;
  }
}
