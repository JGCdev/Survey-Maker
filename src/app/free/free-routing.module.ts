import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeComponent } from './free.component';
import { CamposComponent } from './campos/campos.component';
import { CompartirComponent } from './compartir/compartir.component';
import { AjustesComponent } from './ajustes/ajustes.component';

const routes: Routes = [
  { path: '', redirectTo: 'campos', pathMatch: 'full'},
  { path: 'campos', component: FreeComponent,
    children: [
    {
        path: '',
        component: CamposComponent,
        outlet: 'sidebar'
    }]
  },
  { path: 'ajustes', component: FreeComponent,
    children: [
    {
        path: '',
        component: AjustesComponent,
        outlet: 'sidebar'
    }]
  },
  { path: 'compartir', component: FreeComponent,
    children: [
    {
        path: '',
        component: CompartirComponent,
        outlet: 'sidebar'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeRoutingModule { }
