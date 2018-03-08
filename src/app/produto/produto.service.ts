import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Produto } from './produto.model';
import { Observable } from 'rxjs/Observable';
import { Categoria } from './categoria/categoria.model';

@Injectable()
export class ProdutoService {
  private result: any;
  private baseUrl = 'https://estoque-facil-server.herokuapp.com/produto/';

  constructor(private http: HttpClient) { }

  listaProdutos(): Observable<Produto[]> {
    return this.http.get<Array<Produto>>(this.baseUrl);
  }

  cadastraProduto(produto: Produto) {
    return this.http.post<Produto>(this.baseUrl, produto).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  consultaProduto(id: number) {
    return this.http.get<Produto>(this.baseUrl + id);
  }

  atualizaProduto(id: number, produto: Produto) {
    this.http.put(this.baseUrl + 'atualiza/' + id, produto).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  removeProduto(id: number) {
    return this.http.delete(this.baseUrl + id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  consultaDisponibilidadeProduto(id: number) {
    return this.http
      .get(this.baseUrl + 'disponibilidade/' + id)
      .map(result => (this.result = result as boolean));
  }

  // checar este metodo novamente depois de resolver inconsistencia com o back
  consultaQuantidadeDisponivelProduto(id: number) {
    return this.http
      .get(this.baseUrl + 'quantidade/' + id)
      .map(result => (this.result = result as number));
  }

}
