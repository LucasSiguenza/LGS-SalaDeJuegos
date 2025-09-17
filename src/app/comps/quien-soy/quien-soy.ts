import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  imports: [],
  templateUrl: './quien-soy.html',
  styleUrl: './quien-soy.css'
})
export class QuienSoy {
@ViewChild('wrapper') wrapper!: ElementRef<HTMLDivElement>;

  toggleSidebar() {
    this.wrapper.nativeElement.classList.toggle('toggled');
  }
}
