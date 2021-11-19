import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { productos } from '../models/productos.models';
import { productoServicios } from '../services/productos.service';
import { userServicios } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productosm',
  templateUrl: './productosm.component.html',
  styleUrls: ['./productosm.component.scss'],
  providers: [userServicios,productoServicios]
})
export class ProductosmComponent implements OnInit {

  modeloproducto: productos;
  orden = {orden: ""};
  datos: any;
  datosempresas: any;

  constructor(
    public _userServicios: userServicios,
    public _productoServicios: productoServicios,
    private _router: Router
  ) {
    this.modeloproducto = new productos("","","",0,0,"")
   }

  ngOnInit(): void {
    this.orden.orden = "SotckAsc"
    this.sendProductos()
    this.getEmpresas()
  }

  serrarsecion(){
    window.localStorage.clear()
    this._router.navigate(['/admin'])
  }

  sendProductos(){
    this._productoServicios.sendProductos(this.orden).subscribe(
      res => {
        this.datos = res.productos
      }, error => {
        console.log(<any>error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: <any>error.error.message,
          })
      }
    )
  }

  getEmpresas(){
    this._userServicios.getEmpresas().subscribe(
      res => {
        this.datosempresas = res.empresas
        console.log(this.datosempresas)
      }, error => {
        console.log(<any>error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: <any>error.error.message,
        })
      }
    )
  }
  
  setProducto(){
    this._productoServicios.setProducto(this.modeloproducto).subscribe(
      res => {
        this.sendProductos()
      }, error => {
        console.log(<any>error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: <any>error.error.message,
          })
      }
    )
  }

  Send(name: any){
    this.modeloproducto.name = name
    this.modeloproducto.empresa = ""
    this.modeloproducto.cantidad = 0
    this.modeloproducto.proveedor = ""
    this.modeloproducto.stock = 0;
  }

  setAsignarProducto(id: any){
    this._productoServicios.setAsignarProducto(this.modeloproducto, id).subscribe(
      res =>{
        this.sendProductos()
      },error =>{
        console.log(<any>error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: <any>error.error.message,
          })
      }
    )
  }
}
