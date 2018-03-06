import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

const routes: Routes = [
  { path: 'produto/cadastrar', component: CadastraProdutoComponent },
  { path: 'produto/:id', component: AtualizaProdutoComponent },
  { path: 'produtos', component: ListaProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
