import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VendaService } from './venda.service';
import { VendaRoutingModule } from './venda-routing.module';
import { ListaVendasComponent } from './lista-vendas/lista-vendas.component';
import { RegistraVendaComponent } from './registra-venda/registra-venda.component';
import { ProdutoService } from './../produto/produto.service';

@NgModule({
  imports: [
    CommonModule,
    VendaRoutingModule,
    FormsModule
  ],
  declarations: [ListaVendasComponent, RegistraVendaComponent],
  providers: [ProdutoService, VendaService]
})
export class VendaModule { }
