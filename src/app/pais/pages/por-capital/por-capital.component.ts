import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  errorExiste: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
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
}
