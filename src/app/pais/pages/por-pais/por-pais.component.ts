import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  errorExiste: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.errorExiste = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (respuesta) => {
        console.log(respuesta);
        this.paises = respuesta;
      },
      () => {
        this.errorExiste = true;
        this.paises = [];
      }
    );
  }

  sugerencias($event: string) {
    this.errorExiste = false;
    // falta implementar la funcion sugerencias
  }
}
