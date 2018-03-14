import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { AuthGuard } from '../auth/auth.guard';
import { DescontoComponent } from './desconto/desconto.component';

const routes: Routes = [
  { path: 'produto/cadastrar', component: CadastraProdutoComponent, canActivate: [AuthGuard] },
  { path: 'produto/:id', component: AtualizaProdutoComponent, canActivate: [AuthGuard] },
  { path: 'produtos', component: ListaProdutosComponent, canActivate: [AuthGuard] },
  { path: 'desconto', component: DescontoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
