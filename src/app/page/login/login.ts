import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class Login {

   ingresoForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    contraseña:  new FormControl('', [Validators.required, Validators.minLength(6)])
});
   registroForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    contraseña:  new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', Validators.email)
  })


ingreso(){
  if(this.ingresoForm.valid){
    console.log('Datos login:\n',this.ingresoForm.value)
  } else{
    console.log('Ingreso no válido')
  }
}

registro(){
  if(this.registroForm.valid){
  }
  console.log('Registro aprovado, datos:\n', this.registroForm.value)
}




}
