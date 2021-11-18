import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { LogoutComponent } from './logout/logout.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosmComponent } from './productosm/productosm.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    LogoutComponent,
    EmpleadosComponent,
    NavbarComponent,
    ProductosmComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
