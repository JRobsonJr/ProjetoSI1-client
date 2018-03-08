import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistraVendaComponent } from './registra-venda/registra-venda.component';
import { ListaVendasComponent } from './lista-vendas/lista-vendas.component';
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  { path: 'venda/registrar', component: RegistraVendaComponent, canActivate: [AuthGuard] },
  { path: 'vendas', component: ListaVendasComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendaRoutingModule {}
