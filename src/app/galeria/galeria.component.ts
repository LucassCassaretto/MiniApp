import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { AmpliarImgComponent } from "../ampliar-img/ampliar-img.component";
import { img_card } from '../mock-Img';


@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [NgFor, AmpliarImgComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})

export class GaleriaComponent {

    cards = img_card;

    imagenSeleccionada: string | null = null;
    
    seleccionarImagen(imagen: string) {
       if (this.imagenSeleccionada === imagen) 
        {
         this.imagenSeleccionada = null;
        } else 
           {
            this.imagenSeleccionada = imagen; 
           }
  }

  }

