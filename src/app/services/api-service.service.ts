import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../models/producto.model';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  tokenApi:string="";
  baseUrl:string=`${environment.apiUrl}/productos`;
  //return this.http.post(`${environment.apiUrl}/auth/login`, { username, password });

  //localStorage = Inject(StorageService);
  //headers= new Headers();

  constructor(private http:HttpClient, private localStorage:StorageService) {
    var  user = this.localStorage.getUser();
    this.tokenApi = user["token"];
   }

  //En esta seccion empiezan los metodos para consumir las apis
  getAll() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenApi}`,
    });

    //return this.http.get<Producto[]>(this.baseUrl, { headers });
    return this.http.get<Producto[]>(this.baseUrl, { headers:headers });
    //console.log(data);
    //return data;
  }


}
