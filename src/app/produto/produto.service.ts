import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Produto } from './produto.model';
import { Categoria } from './categoria/categoria.model';

@Injectable()
export class ProdutoService {
  private result: any;
  private baseUrl = 'https://estoque-facil-server.herokuapp.com/produto/';

  constructor(private http: HttpClient) {}

  listaProdutos(): Observable<Produto[]> {
    return this.http.get<Array<Produto>>(this.baseUrl).map(produtos => {
      return produtos;
    });
  }

  atualizaInformacoesProdutos(produtos: Array<Produto>) {
    for (const produto of produtos) {
      this.consultaDisponibilidadeProduto(produto.id).subscribe(
        disponibilidade => (produto.disponivel = disponibilidade)
      );

      this.consultaPrecoProduto(produto.id).subscribe(
        preco => (produto.preco = preco)
      );
    }

    return produtos;
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
    return this.http.get(this.baseUrl + id).map(result => {
      const produto: Produto = new Produto();
      Object.assign(produto, result);
      produto.setNomeCategoria();
      return produto;
    });
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

  consultaPrecoProduto(id: number): Observable<number> {
    return this.http
      .get(this.baseUrl + 'preco/' + id)
      .map(objWrapper => objWrapper['obj']);
  }

  consultaDisponibilidadeProduto(id: number): Observable<boolean> {
    return this.http
      .get(this.baseUrl + 'disponibilidade/' + id)
      .map(objWrapper => objWrapper['obj']);
  }

  // checar este metodo novamente depois de resolver inconsistencia com o back
  consultaQuantidadeDisponivelProduto(id: number) {
    return this.http.get<number>(this.baseUrl + 'quantidade/' + id);
  }

  ordenarProdutosPorNome(): Observable<Produto[]> {
    return this.http.get<Array<Produto>>(this.baseUrl + '/ordenar-nome');
  }

  ordenarProdutosPorCategoria(): Observable<Produto[]> {
    return this.http.get<Array<Produto>>(this.baseUrl + '/ordenar-categoria');
  }

  ordenarProdutosPorFabricante(): Observable<Produto[]> {
    return this.http.get<Array<Produto>>(this.baseUrl + '/ordenar-fabricante');
  }

  ordenarProdutosPorPreco(): Observable<Produto[]> {
    return this.http.get<Array<Produto>>(this.baseUrl + '/ordenar-preco');
  }

  listaCategorias() {
    return this.http
      .get(this.baseUrl + 'listar-categorias')
      .map(objWrapper => objWrapper['obj']);
  }

  atribuiDescontoACategoria(categoria: string, desconto: string) {
    this.http.post(this.baseUrl + 'categoria/' + categoria + '/desconto/' + desconto, null).subscribe();
  }
}
