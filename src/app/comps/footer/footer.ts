import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firebase } from '../../services/firebase';
import { Utils } from '../../services/utils';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  navbarOpen = false;
  userMenuOpen = false;

  utilsSvc = inject(Utils)
  firebaseSvc = inject(Firebase)

  //================ Botones desplegables================
  desplegarNavBar(){
    this.navbarOpen = !this.navbarOpen;
  }

  desplegarUserMenu(){
    this.userMenuOpen = !this.userMenuOpen;
  }

  //================ Cerrar sesión ================

  cerrarSesion(){
    this.firebaseSvc.egreso();
    this.utilsSvc.mostrarToast('Sesión cerrada','info');
    setTimeout(() => {
     return this.utilsSvc.routerLink('/login');
  }, 500);
  }

}
