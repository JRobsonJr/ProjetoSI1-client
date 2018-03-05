import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelDeControleRoutingModule } from './painel-de-controle-routing.module';
import { RegistraVendaComponent } from './venda/registra-venda/registra-venda.component';
import { ListaVendasComponent } from './venda/lista-vendas/lista-vendas.component';
import { PainelDeControleComponent } from './painel-de-controle.component';

@NgModule({
  imports: [
    CommonModule,
    PainelDeControleRoutingModule
  ],
  declarations: [PainelDeControleComponent, RegistraVendaComponent, ListaVendasComponent]
})
export class PainelDeControleModule { }
