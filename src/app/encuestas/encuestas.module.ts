import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestasRoutingModule } from './encuestas-routing.module';
import { EncuestasComponent } from './encuestas.component';
import {EncuestaCreadaComponent  } from './encuesta-creada/encuesta-creada.component';

import { FormsModule } from '@angular/forms';
import { VotarComponent } from './votar/votar.component';
import { SharedModule } from '../shared/shared.module';
import { PlantillaComponent } from './plantilla/plantilla.component';
@NgModule({
  declarations: [EncuestasComponent,  EncuestaCreadaComponent, VotarComponent, PlantillaComponent],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class EncuestasModule { }
