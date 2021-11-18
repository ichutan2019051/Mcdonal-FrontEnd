   
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.models';
import { userServicios } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [userServicios]
})
export class LoginComponent implements OnInit {
  ModeloUser: user;

  constructor(
    private _userServicios:userServicios,
    private _router: Router
  ) { 
    this.ModeloUser = new user("","","","","")
  }

  ngOnInit(): void {
  }

  login(){
    this._userServicios.login(this.ModeloUser).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem("idmiuser", res.user._id)
        localStorage.setItem("name", res.user.name)
        localStorage.setItem("rol", res.user.rol)
        
        if(res.user.rol == "ADMIN"){
          this._router.navigate(['/admin'])
        }else{
          this._router.navigate(['/empleados'])
        }
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bienvenido '+res.user.name,
          showConfirmButton: false,
          showCloseButton: true,
          timer: 1500
        })
      },error =>{
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: '<strong>Error </strong>'+<any>error.error.message,
          showConfirmButton: false,
          showCloseButton: true,
          timer: 1500
        })
      }
    )
  }
}