import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';

  get tablaparams() {
    return new HttpParams().set('fields', 'name,capital,population,cca2,flags');
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.tablaparams });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.tablaparams });
  }

  verPais(id: string): Observable<Country[]> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this._apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.tablaparams });
  }
}
