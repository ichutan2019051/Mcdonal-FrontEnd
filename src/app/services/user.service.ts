import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { user } from '../models/user.models';
import { serviciosglobales } from "./global.service";

@Injectable({
    providedIn: 'root'
})
export class userServicios{

  url: string;
  token: any;
  public encabezadosintoken = new HttpHeaders().set('Content-Type','application/json');
  public encabezadocontoken = this.encabezadosintoken.set('Authorization', this.getToken());
  

  constructor(public _http: HttpClient){
      this.url = serviciosglobales.url
  }

  login(datos: user): Observable<any>{
      let params = JSON.stringify(datos);
      return this._http.post(this.url+"login", params, {headers: this.encabezadosintoken})
  }

  getEmpresas(): Observable<any>{
      return this._http.get(this.url+"getEmpresas", {headers: this.encabezadocontoken})
  }


  saveEmpresa(datos: user):Observable<any>{
      let params = JSON.stringify(datos)
      return this._http.post(this.url+"saveEmpresa", params, {headers: this.encabezadocontoken})
  }
  /*
    search(datos: any): Observable<any>{
      let params = JSON.stringify(datos)
      return this._http.post(this.url+"searchEmpresa", params, {headers: this.encabezadocontoken})
  } */



  removeEmpresa(id: any, datos: user): Observable<any>{
      let params = JSON.stringify(datos)
      return this._http.put(this.url+"removeEmpresa/"+id, params, {headers: this.encabezadocontoken})
  }


  getToken(){
      var token2 = localStorage.getItem('token');
      if(token2 != 'undefined'){
        this.token = token2;
      }else{
        this.token = null;
      }
      return this.token;
  }

  getrol(){
      var token2 = localStorage.getItem('rol');
      if(token2 != 'undefined'){
        this.token = token2;
      }else{
        this.token = null;
      }
      return this.token;
  }

  getname(){
      var token2 = localStorage.getItem('name');
      if(token2 != 'undefined'){
        this.token = token2;
      }else{
        this.token = null;
      }
      return this.token;
  }
}

