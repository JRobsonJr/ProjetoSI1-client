import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelDeControleComponent } from './painel-de-controle.component';
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  { path: 'painel-de-controle', component: PainelDeControleComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelDeControleRoutingModule { }
