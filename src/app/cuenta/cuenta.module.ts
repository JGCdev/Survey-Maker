import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentaRoutingModule } from './cuenta-routing.module';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { AuthServiceConfig } from 'angularx-social-login';
import { provideConfig } from '../login/login.module';


@NgModule({
  declarations: [MiCuentaComponent],
  imports: [
    CommonModule,
    CuentaRoutingModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
})
export class CuentaModule { }
