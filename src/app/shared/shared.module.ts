import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  exports: [HeaderComponent, FooterComponent, AngularFontAwesomeModule, SpinnerComponent]
})
export class SharedModule { }
