import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AccesoComponent } from './acceso/acceso.component';
import { LoginOkComponent } from './login-ok/login-ok.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AccesoComponent, LoginOkComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
