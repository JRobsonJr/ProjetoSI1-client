import { VendaItem } from './venda-item.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProdutoService } from './../produto/produto.service';

@Injectable()
export class VendaService {
  private baseUrl = 'https://estoque-facil-server.herokuapp.com/venda/';

  constructor(
    private http: HttpClient,
    private produtoService: ProdutoService
  ) {}

  cadastraVenda(carrinho: Array<VendaItem>, data: string) {
    this.http.post(this.baseUrl + 'compra/' + data, carrinho).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  consultaProduto(idProduto: number) {
    return this.produtoService.consultaProduto(idProduto);
  }

  listaVendas() {}

  recuperaProdutos() {
    return this.produtoService.listaProdutos();
  }

  recuperaTotalVendas() {}

  cancelaVenda() {}
}
