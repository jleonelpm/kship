import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  tokenApi:string="";
  baseUrl:string="";

  constructor(private http:HttpClient) { }

  //En esta seccion empiezan los metodos para consumir las apis

}
