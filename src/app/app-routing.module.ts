import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { EmpleadosComponent} from './empleados/empleados.component';
import { ProductosmComponent } from './productosm/productosm.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminComponent},
  {path: "logout", component: LogoutComponent},
  {path: "empleados", component: EmpleadosComponent},
  {path: "productosm", component: ProductosmComponent},
  {path: "**", component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
