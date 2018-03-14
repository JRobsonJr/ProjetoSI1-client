import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RelatorioService {
  private baseUrl = 'https://estoque-facil-server.herokuapp.com/';

  constructor(private http: HttpClient) { }

  calculaTotalDeVendas() {
    return this.http
      .get(this.baseUrl + 'venda/caixa')
      .map(objWrapper => objWrapper['obj']);
  }

  listarVendas() {
    return this.http.get<Array<any>>(this.baseUrl + 'venda/vendas');
  }

  recuperaValidadesLotes() {
    return this.http
      .get(this.baseUrl + 'lote/vendas')
      .map(objWrapper => objWrapper['obj']);
  }

  recuperaTotalProdutos() {
    return this.http
      .get(this.baseUrl + 'produto/quantidade')
      .map(objWrapper => objWrapper['obj']);
  }

  recuperaTotalLotes() {
    return this.http
      .get(this.baseUrl + 'venda/caixa')
      .map(objWrapper => objWrapper['obj']);
  }
  
}
