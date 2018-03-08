import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistraVendaComponent } from './registra-venda/registra-venda.component';
import { ListaVendasComponent } from './lista-vendas/lista-vendas.component';

const routes: Routes = [
  { path: 'venda/registrar', component: RegistraVendaComponent },
  { path: 'vendas', component: ListaVendasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendaRoutingModule {}
