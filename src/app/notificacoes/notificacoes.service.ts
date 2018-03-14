import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from './../produto/produto.model';

@Injectable()
export class NotificacoesService {

  private baseUrl = 'https://estoque-facil-server.herokuapp.com/';

  constructor(private http: HttpClient) {}

  listaProdutosBaixaQuant() {
    return this.http.get<Array<Produto>>(this.baseUrl + 'lote/lista-produtos-baixa-quant');
  }

  listaProdutosVencimentoProximo() {
    return this.http.get<Array<Produto>>(this.baseUrl + 'lote/lista-perto-vencer');
  }

}
