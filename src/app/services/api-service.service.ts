import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../models/producto.model';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { environment } from 'src/enviroments/enviroment';
import { Categoria } from '../models/categoria.model';
import { Orden } from '../models/orden.model';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  tokenApi: string = '';
  baseUrl: string = `${environment.apiUrl}`;
  //return this.http.post(`${environment.apiUrl}/auth/login`, { username, password });

  //localStorage = Inject(StorageService);
  //headers= new Headers();

  constructor(private http: HttpClient, private localStorage: StorageService) {
    var user = this.localStorage.getUser();
    this.tokenApi = user['token'];
  }

  //En esta seccion empiezan los metodos para consumir las apis
  getAllCategorias() : Observable<Categoria[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenApi}`,
    });

    return this.http.get<Categoria[]>(`${this.baseUrl}/categorias`, { headers: headers });

  }

  getAllProductos() : Observable<Producto[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenApi}`,
    });

    return this.http.get<Producto[]>(`${this.baseUrl}/productos`, { headers: headers });

  }

  getAllOrdenes() : Observable<Orden[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenApi}`,
    });

    return this.http.get<Orden[]>(`${this.baseUrl}/ordenes`, { headers: headers });

  }

}
