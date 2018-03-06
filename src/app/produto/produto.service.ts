import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Produto } from './produto.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProdutoService {
  private result: any;
  private produtos: Array<Produto> = new Array<Produto>();
  private baseUrl = 'https://estoque-facil-server.herokuapp.com/produto';

  constructor(private http: Http) {
    this.listaProdutos().subscribe(resp => {
      this.produtos = resp;
    });
  }

  listaProdutos(): Observable<Produto[]> {
    return this.http
      .get(this.baseUrl)
      .map(result => (this.result = result.json() as Array<Produto>));
  }

  cadastraProduto(produto: Produto) {
    return this.http.post(this.baseUrl, produto).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  consultaProduto(id: number) {
    return this.http
      .get(this.baseUrl + '/' + id)
      .map(result => (this.result = result.json() as Produto));
  }

  atualizaProduto(id: number, produto: Produto) {
    this.http.put(this.baseUrl + '/atualiza/' + id, produto).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  removeProduto(id: number) {
    return this.http.delete(this.baseUrl + '/' + id).subscribe(
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
      .get(this.baseUrl + '/disponibilidade/' + id)
      .map(result => (this.result = result.json() as boolean));
  }

  // checar este metodo novamente depois de resolver inconsistencia com o back
  consultaQuantidadeDisponivelProduto(id: number) {
    return this.http
      .get(this.baseUrl + '/quantidade/' + id)
      .map(result => (this.result = result.json() as number));
  }

}
