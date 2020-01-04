import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuestasComponent } from './encuestas.component';
import { EncuestaCreadaComponent } from './encuesta-creada/encuesta-creada.component';
import { VotarComponent } from './votar/votar.component';
import { PlantillaComponent } from './plantilla/plantilla.component';

const routes: Routes = [
  { path: '', redirectTo: 'crear-encuesta/plantilla', pathMatch: 'full'},
  { path: 'crear-encuesta/plantilla', component: PlantillaComponent},
  { path: 'crear-encuesta/campos', component: EncuestasComponent},
  { path: 'encuesta-creada', component: EncuestaCreadaComponent},
  { path: ':id', component: VotarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestasRoutingModule { }
