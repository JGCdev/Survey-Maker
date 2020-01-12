import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamposComponent } from './campos/campos.component';
import { EncuestaCreadaComponent } from './encuesta-creada/encuesta-creada.component';
import { VotarComponent } from './votar/votar.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: '', redirectTo: 'crear-encuesta/plantilla', pathMatch: 'full'},
  { path: 'crear-encuesta', redirectTo: 'crear-encuesta/plantilla', pathMatch: 'full'},
  { path: 'crear-encuesta/plantilla', component: PlantillaComponent},
  { path: 'crear-encuesta/campos', component: CamposComponent},
  { path: 'crear-encuesta/ajustes', component: AjustesComponent},
  { path: 'encuesta-creada/:id', component: EncuestaCreadaComponent},
  { path: 'seguimiento/:id', component: StatsComponent},
  { path: ':id', component: VotarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestasRoutingModule { }
