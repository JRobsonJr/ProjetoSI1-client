import { FormsModule } from '@angular/forms';
import { ProdutoService } from './produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CadastraProdutoComponent } from './cadastra-produto/cadastra-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ProdutoRoutingModule
  ],
  declarations: [ListaProdutosComponent, CadastraProdutoComponent, AtualizaProdutoComponent],
  providers: [ProdutoService]
})
export class ProdutoModule { }
