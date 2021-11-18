   
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { empleado } from '../models/empleado.models';
import { serviciosglobales } from "./global.service";

@Injectable({
    providedIn: 'root'
})
export class empleadoServicios{


    url: string;
    token: any;
    public encabezadosintoken = new HttpHeaders().set('Content-Type','application/json');
    public encabezadocontoken = this.encabezadosintoken.set('Authorization', this.getToken());
    

    constructor(public _http: HttpClient){
        this.url = serviciosglobales.url
    }

    //funcion para obtener todos los empleados
    getEmpleados(): Observable<any>{
        return this._http.get(this.url+"getEmpleados", {headers: this.encabezadocontoken})
    }

 

    //funcion para agregar un empleado
    setEmpleado(datos: empleado): Observable<any>{
        let params = JSON.stringify(datos)
        return this._http.put(this.url+"setEmpleado", params, {headers: this.encabezadocontoken})
    }

    //funcion para eliminar un empleado
    removeEmpleado(id: any):Observable<any>{
        return this._http.delete(this.url+"removeEmpleado/"+id, {headers: this.encabezadocontoken})
    }

    updateEmpleado(id: any, datos: empleado):Observable<any>{
        let params = JSON.stringify(datos)
        return this._http.put(this.url+"updateEmpleado/"+id, params, {headers: this.encabezadocontoken})
    }

    search(datos: any): Observable<any>{
        let params = JSON.stringify(datos)
        return this._http.post(this.url+"search", params, {headers: this.encabezadocontoken})
    }

    //funcion para obtener el token
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