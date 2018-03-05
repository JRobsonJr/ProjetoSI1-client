import { Injectable, EventEmitter, OnInit } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";

import { Produto } from "./produto.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProdutoService {
  private result: any;
  private produtos: Array<Produto> = new Array<Produto>();
  private baseUrl = "https://estoque-facil-server.herokuapp.com/produto";

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

  atribuiPrecoProduto(id: number, preco: number) {
    // TODO: Paulo
  }

  removeProduto(id: number) {
    // TODO: Paulo
  }

  consultaDisponibilidadeProduto(id: number) {
    // TODO: Paulo
  }

  consultaQuantidadeDisponivelProduto(id: number) {
    // TODO: Paulo
  }

}
