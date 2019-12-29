import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeRoutingModule } from './free-routing.module';
import { FreeComponent } from './free.component';
import { CamposComponent } from './campos/campos.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { CompartirComponent } from './compartir/compartir.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [FreeComponent, CamposComponent, AjustesComponent, CompartirComponent],
  imports: [
    CommonModule,
    FreeRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ]
})
export class FreeModule { }
