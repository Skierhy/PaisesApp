import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.sass'],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private servicioService: PaisService) {}

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
  activaRegion(region: string) {
    if (this.regionActiva === region) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];
    this.servicioService
      .buscarRegion(this.regionActiva)
      .subscribe((respuesta) => {
        this.paises = respuesta;
      });
  }
}
