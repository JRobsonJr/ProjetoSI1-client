import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Produto } from './produto.model';

@Injectable()
export class ProdutoService {

  private result: any;
  private produtos: Array<Produto> = new Array<Produto>();

  constructor(private http: Http) {
    this.getProdutos().subscribe(resp => {
      this.produtos = resp;
    });
  }

  getProdutos() {
    return this.http
      .get('https://estoque-facil-client.herokuapp.com/produto')
      .map(result => (this.result = result.json() as Array<Produto>));
  }

}
