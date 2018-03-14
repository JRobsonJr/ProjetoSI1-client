import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto.model';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['./cliente-view.component.css']
})
export class ClienteViewComponent implements OnInit {
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
    this.produtoService.removeProduto(id);
    this.atualizaListaProdutos();
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
