import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelDeControleComponent } from './painel-de-controle.component';

const routes: Routes = [
  { path: 'painel-de-controle', component: PainelDeControleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelDeControleRoutingModule { }
