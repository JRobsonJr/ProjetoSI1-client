import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lote } from './lote.model';
import { Produto } from '../produto/produto.model';

@Injectable()
export class LoteService {
  private result: any;
  private baseUrl = 'https://estoque-facil-server.herokuapp.com/lote/';

  constructor(private http: HttpClient) { }

  listaLotes() {
    return this.http.get<Array<Lote>>(this.baseUrl);
  }

  listaProdutosDisponiveis() {
    return this.http.get<Array<Produto>>(this.baseUrl + 'lista-produtos-disponiveis');
  }

  listaProdutosIndisponiveis() {
    return this.http.get<Array<Produto>>(this.baseUrl + 'lista-produtos-indisponiveis');
  }

  listaProdutosVencidos() {
    return this.http.get<Array<Produto>>(this.baseUrl + 'lista-produtos-vencidos');
  }

  cadastraLote(id: number, lote: Lote) {
    this.http.post(this.baseUrl + 'produto/' + id, lote).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
