import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  // como crear un observable manualmente
  // subject es un observable que se puede suscribir a una funcion
  debouncer: Subject<string> = new Subject();
  termino: string = '';

  // ngOnInit se dispara una sola vez cuando el componente es creado y ya esta inicializado
  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300) // debounceTime es un metodo que se puede usar para debounceear un observable
        // sintaxis debounceTime(tiempo)
      ) // pipe es un metodo que se puede usar para transformar el observable
      .subscribe((valor) => {
        this.onDebounce.emit(valor);
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    // .next es un metodo que se puede usar para enviar un valor al observable
    this.debouncer.next(this.termino);
  }
}
