import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from "@angular/common";
import { Utils } from '../../services/utils';
import { Firebase } from '../../services/firebase';
import { Usuario } from '../../models/usuario.model';
import { serverTimestamp } from 'firebase/firestore';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf, MatIconModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true
})
export class Login {

   ingresoForm = new FormGroup({
    email: new FormControl('', Validators.required),
    contraseña:  new FormControl('', [Validators.required, Validators.minLength(6)])
});
   registroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    contraseña:  new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', Validators.email),
  })

  utilsSvc = inject(Utils);
  firebaseSvc = inject(Firebase);



async ingreso(){
  if(this.ingresoForm.valid){
    try{
      this.utilsSvc.mostrarLoading();

      const res = await this.firebaseSvc.ingreso(this.ingresoForm.value as Usuario);
      console.log('Login exitoso: ', res);

      this.utilsSvc.mostrarToast('Ingreso exitoso', 'success')

      await this.utilsSvc.routerLink('/home');
    
    } catch(e: any){

      this.utilsSvc.mostrarToast('La mamá de anim 😡💢', 'error');
      console.log(e.message);
    
    } finally{
      this.utilsSvc.ocultarLoading();
    }
  }
}

async registro(){
  try{
    this.utilsSvc.mostrarLoading();
    const nuevoUsuario = { 
      ...this.registroForm.value,
      fechaCreacion: serverTimestamp()  
    };
    const res = await this.firebaseSvc.registro(nuevoUsuario as Usuario);
    console.log("¡Registro exitante🥵: ", res);

    this.utilsSvc.mostrarToast('¡La pusiste, te registraste, sos un capo!🎉', 'success');

    this.ingresoForm.setValue({
      email: this.registroForm.value.email,
      contraseña: this.registroForm.value.contraseña
    });
    const chk = document.getElementById('chk') as HTMLInputElement;
    chk.checked = true;
  }catch(e: any){
    this.utilsSvc.mostrarToast('La mamá de anim 😡💢', 'error');
    console.log(e.message);
  } finally{
    setTimeout(()=>{
    return this.utilsSvc.ocultarLoading();  
    }, 500)
  }
}

botonTesteoAnim(){
  return this.ingresoForm.setValue({
      email: 'anim@anim.com',
      contraseña: 'animeistrum'
    });
}
botonTesteo1(){
    return this.ingresoForm.setValue({
      email: 'c@c.com',
      contraseña: '123456'
    });
}

botonTesteo2(){
  return this.ingresoForm.setValue({
      email: 'teseteo@test.com',
      contraseña: 't e s t e o'
    });
}

ngOnInit() {
  const chk = document.getElementById('chk') as HTMLInputElement;
  chk.checked = true;
}


}
