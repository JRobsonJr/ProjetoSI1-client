import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelDeControleRoutingModule } from './painel-de-controle-routing.module';
import { PainelDeControleComponent } from './painel-de-controle.component';
import { NotificacoesComponent } from '../notificacoes/notificacoes.component';
import { NotificacoesService } from '../notificacoes/notificacoes.service';
import { RelatorioComponent } from './../relatorio/relatorio.component';
import { RelatorioService } from './../relatorio/relatorio.service';

@NgModule({
  imports: [
    CommonModule,
    PainelDeControleRoutingModule
  ],
  declarations: [PainelDeControleComponent, NotificacoesComponent, RelatorioComponent],
  providers: [NotificacoesService, RelatorioService]
})
export class PainelDeControleModule { }
