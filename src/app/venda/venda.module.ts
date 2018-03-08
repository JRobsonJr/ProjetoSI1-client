import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendaRoutingModule } from './venda-routing.module';
import { ListaVendasComponent } from './lista-vendas/lista-vendas.component';
import { RegistraVendaComponent } from './registra-venda/registra-venda.component';

@NgModule({
  imports: [
    CommonModule,
    VendaRoutingModule
  ],
  declarations: [ListaVendasComponent, RegistraVendaComponent]
})
export class VendaModule { }
