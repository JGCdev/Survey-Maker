import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AccesoComponent } from './acceso/acceso.component';
import { LoginOkComponent } from './login-ok/login-ok.component';



@NgModule({
  declarations: [AccesoComponent, LoginOkComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
