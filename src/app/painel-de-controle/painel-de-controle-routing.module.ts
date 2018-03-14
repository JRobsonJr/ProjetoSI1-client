import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelDeControleComponent } from './painel-de-controle.component';
import { AuthGuard } from '../auth/auth.guard';
import { NotificacoesComponent } from '../notificacoes/notificacoes.component';
import { RelatorioComponent } from './../relatorio/relatorio/relatorio.component';

const routes: Routes = [
  { path: 'painel-de-controle', component: PainelDeControleComponent, canActivate: [AuthGuard] },
  { path: 'notificacoes', component: NotificacoesComponent, canActivate: [AuthGuard] },
  { path: 'relatorio', component: RelatorioComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelDeControleRoutingModule { }
