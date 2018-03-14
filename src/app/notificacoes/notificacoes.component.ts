import { Component, OnInit } from '@angular/core';

import { NotificacoesService } from './notificacoes.service';
import { Produto } from '../produto/produto.model';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.css']
})
export class NotificacoesComponent implements OnInit {
  produtosVencimentoProximo: Array<Produto>;
  produtosBaixaQtd: Array<Produto>;

  constructor(private notificacoesService: NotificacoesService) {
    this.produtosBaixaQtd = new Array<Produto>();
    this.produtosVencimentoProximo = new Array<Produto>();
  }

  ngOnInit() {
    this.atualizaProdutos();
  }

  atualizaProdutos() {
    this.notificacoesService
      .listaProdutosBaixaQuant()
      .subscribe(produtos => (this.produtosBaixaQtd = produtos));

    this.notificacoesService
      .listaProdutosVencimentoProximo()
      .subscribe(produtos => (this.produtosVencimentoProximo = produtos));
  }
}
