import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user.models';
import { userServicios } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [userServicios]
})
export class AdminComponent implements OnInit {
 
  rol: any;
  datosempresas: any;
  ModeloUser: user;
  namecompay: any;
  bloqueobotones: any;
  datosempleados: any;

  constructor(
    public _userServicios: userServicios,
    private _router: Router
  ) { 
    this.ModeloUser = new user("","","","","")
  }

  ngOnInit(): void {
    this.getEmpresas()
  }



  productos(){
    this._router.navigate(['/productosm'])
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

  saveEmpresa(){
    this._userServicios.saveEmpresa(this.ModeloUser).subscribe(
      res =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La empresa con el nombre de: '+this.ModeloUser.name+' fue creada correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.getEmpresas()
      },  error => {
        console.log(<any>error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: <any>error.error.message,
        })
      }
    )
  }

  datecaputre(id: any){
    this.ModeloUser._id = id
  }
  

  

  removeEmpresa(){
    this._userServicios.removeEmpresa(this.ModeloUser._id, this.ModeloUser).subscribe(
      res =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La empresa con el nombre de: '+res.userRemoved.name+' fue eliminada correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.getEmpresas()
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
    autoTable(doc, { html: '#table-sucursales' })
    doc.save("Tabla De sucursales "+".pdf")
  }
  
}


/*
Buscar(){
  if(this.busqueda.search == ""){
    this.getEmpresas()
  }else{
    this.userServicios.search(this.busqueda).subscribe(
      res => {
        this.datosempresas = res.resultSearch
        console.log(res)
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
} */