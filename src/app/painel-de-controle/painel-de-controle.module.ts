import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelDeControleRoutingModule } from './painel-de-controle-routing.module';
import { PainelDeControleComponent } from './painel-de-controle.component';
import { NotificacoesComponent } from '../notificacoes/notificacoes.component';
import { NotificacoesService } from '../notificacoes/notificacoes.service';

@NgModule({
  imports: [
    CommonModule,
    PainelDeControleRoutingModule
  ],
  declarations: [PainelDeControleComponent, NotificacoesComponent],
  providers: [NotificacoesService]
})
export class PainelDeControleModule { }
