import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes =
[
  { path: '', component: MiCuentaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentaRoutingModule { }
