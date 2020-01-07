import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';

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
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
