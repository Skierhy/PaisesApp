import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais: Country[] = [];
  constructor(
    private cambioURL: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // larga
    // this.cambioURL.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.paisService.verPais(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });

    // corta

    this.cambioURL.params
      .pipe(
        // switchMap es un operador que permite hacer una transformacion de un observable
        // lo que hace es recibir un observable y devolver un observable
        // lo que hace es recibir lo que tiene params y devolver un observable con el id del pais que se quiere ver
        switchMap(({ id }) => this.paisService.verPais(id)),
        tap(console.log) // tap es un operador que permite hacer una transformacion de un observable
        //
      )
      .subscribe((pais) => (this.pais = pais));
  }
}
