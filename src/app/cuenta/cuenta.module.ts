import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentaRoutingModule } from './cuenta-routing.module';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MiCuentaComponent],
  imports: [
    CommonModule,
    CuentaRoutingModule,
    SharedModule
  ]
})
export class CuentaModule { }
