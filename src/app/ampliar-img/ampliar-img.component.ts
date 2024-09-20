import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-ampliar-img',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ampliar-img.component.html',
  styleUrl: './ampliar-img.component.css'
})
export class AmpliarImgComponent {
  @Input() imagen: string | null = null;

  @Output() cerrar = new EventEmitter<void>(); 

  cerrarImg() {
    this.cerrar.emit(); 
  }
}
