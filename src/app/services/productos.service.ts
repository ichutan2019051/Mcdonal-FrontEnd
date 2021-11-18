import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { productos } from '../models/productos.models';
import { serviciosglobales } from "./global.service";

@Injectable({
    providedIn: 'root'
})
export class productoServicios{

    url: string;
    token: any;
    public encabezadosintoken = new HttpHeaders().set('Content-Type','application/json');
    public encabezadocontoken = this.encabezadosintoken.set('Authorization', this.getToken());
    

    constructor(public _http: HttpClient){
        this.url = serviciosglobales.url
    }

    sendProductos(datos: any): Observable<any>{
        let params = JSON.stringify(datos)
        return this._http.put(this.url+"sendProductos", params, {headers: this.encabezadocontoken})
    }

    setProducto(datos: productos): Observable<any>{
        let params = JSON.stringify(datos)
        return this._http.post(this.url+"setProducto", params, {headers: this.encabezadocontoken})
    }

    setAsignarProducto(datos: productos, id: any): Observable<any>{
        let params = JSON.stringify(datos)
        return this._http.put(this.url+"setAsignarProducto/"+id, params, {headers: this.encabezadocontoken})
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
}