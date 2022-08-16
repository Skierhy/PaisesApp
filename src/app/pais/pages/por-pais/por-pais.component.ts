import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.sass'],
})
export class PorPaisComponent {
  termino: string = '';
  errorExiste: boolean = false;
  paises: Country[] = [];
  paisesSugerencia: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.errorExiste = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (respuesta) => {
        this.paises = respuesta;
      },
      () => {
        this.errorExiste = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.mostrarSugerencias = true;
    this.errorExiste = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      (respuesta) => {
        this.paisesSugerencia = respuesta.splice(0, 4);
      },
      (error) => {
        this.paisesSugerencia = [];
      }
    );
  }
}
