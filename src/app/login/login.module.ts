import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AccesoComponent } from './acceso/acceso.component';
import { LoginOkComponent } from './login-ok/login-ok.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('951024180628-qlpd3vtirsn64k5m2o0s9bq8eddh51to.apps.googleusercontent.com')
  }
]);
export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [AccesoComponent, LoginOkComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
})
export class LoginModule { }
