import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  private produtos: Array<Produto> = new Array<Produto>();

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.atualizaListaProdutos();
  }

  atualizaListaProdutos() {
    this.produtoService
      .listaProdutos()
      .subscribe(produtos => (this.produtos = produtos));
  }

  deletaProduto(id: number) {
    this.produtoService.removeProduto(id).subscribe(produtos => (this.produtos = produtos));
  }

  consultaDisponibilidadeProduto(id: number) {
    return this.produtoService.consultaDisponibilidadeProduto(id);
  }

  ordenarProdutosPorNome() {
    this.produtoService
      .ordenarProdutosPorNome() 
      .subscribe(produtos => (this.produtos = produtos));
  }

  ordenarProdutosPorCategoria() {
    this.produtoService
      .ordenarProdutosPorCategoria() 
      .subscribe(produtos => (this.produtos = produtos));
  }

  ordenarProdutosPorFabricante() {
    this.produtoService
      .ordenarProdutosPorFabricante() 
      .subscribe(produtos => (this.produtos = produtos));
  }

  ordenarProdutosPorPreco() {
    this.produtoService
      .ordenarProdutosPorPreco() 
      .subscribe(produtos => (this.produtos = produtos));
  }
}
