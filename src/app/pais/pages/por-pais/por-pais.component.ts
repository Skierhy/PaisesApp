import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  errorExiste: boolean = false;
  constructor(private paisService: PaisService) {}
  buscar() {
    this.errorExiste = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(
      (respuesta) => {
        console.log(respuesta);
      },
      () => {
        this.errorExiste = true;
      }
    );
  }
}
