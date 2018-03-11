import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendaRoutingModule } from './venda-routing.module';
import { ListaVendasComponent } from './lista-vendas/lista-vendas.component';
import { RegistraVendaComponent } from './registra-venda/registra-venda.component';
import { ProdutoService } from './../produto/produto.service';

@NgModule({
  imports: [
    CommonModule,
    VendaRoutingModule
  ],
  declarations: [ListaVendasComponent, RegistraVendaComponent],
  providers: [ProdutoService]
})
export class VendaModule { }
