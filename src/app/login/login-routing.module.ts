import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoComponent } from './acceso/acceso.component';
import { LoginOkComponent } from './login-ok/login-ok.component';


const routes: Routes = [
  { path: '', redirectTo: 'acceso', pathMatch: 'full'},
  { path: 'acceso', component: AccesoComponent},
  {path: 'loginsuccess', component: LoginOkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
