import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { productos } from '../models/productos.models';
import { productoServicios } from '../services/productos.service';
import { userServicios } from '../services/user.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-productoss',
  templateUrl: './productoss.component.html',
  styleUrls: ['./productoss.component.scss'],
  providers: [userServicios]
})
export class ProductossComponent implements OnInit {
  namecompay: any;
  orden = {orden: ""};
  datos: any;
  modeloproducto: productos;

  constructor(
    public _userServicios: userServicios,
    public _productoServicios: productoServicios,
    private _router: Router
  ) {
    this.namecompay = this._userServicios.getname()
    this.modeloproducto = new productos("","","",0,0,"")
   }

  ngOnInit(): void {
    this.orden.orden = "SotckAsc"
    this.sendProductos()
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

  send(id: any){
    this.modeloproducto._id = id
  }

  store(){
    this._productoServicios.store(this.modeloproducto, this.modeloproducto._id).subscribe(
      res => {
        console.log(res)
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
  
  Imprimir(){
    const doc = new jsPDF();
    autoTable(doc, { html: '#tabla-productos' })
    doc.save("Tabla De sucursales "+".pdf")
  }
}
