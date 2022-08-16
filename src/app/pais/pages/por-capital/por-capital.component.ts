import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.sass'],
})
export class PorCapitalComponent {
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
    this.paisService.buscarCapital(this.termino).subscribe(
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
    this.paisService.buscarCapital(termino).subscribe(
      (respuesta) => {
        this.paisesSugerencia = respuesta.splice(0, 4);
      },
      (error) => {
        this.paisesSugerencia = [];
      }
    );
  }
}
