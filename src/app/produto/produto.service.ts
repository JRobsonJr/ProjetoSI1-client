import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Produto } from './produto.model';
import { Categoria } from './categoria/categoria.model';

@Injectable()
export class ProdutoService {
  private result: any;
  private baseUrl = 'https://estoque-facil-server.herokuapp.com/';

  constructor(private http: HttpClient) {}

  listaProdutos(): Observable<Produto[]> {
    return this.http.get<Array<Produto>>(this.baseUrl + 'produto').map(produtos => {
      return this.atualizaInformacoesProdutos(produtos);
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
    return this.http.post<Produto>(this.baseUrl + 'produto', produto).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  consultaProduto(id: number) {
    return this.http.get(this.baseUrl + 'produto/' + id).map(result => {
      const produto: Produto = new Produto();
      Object.assign(produto, result);
      produto.setNomeCategoria();
      return produto;
    });
  }

  atualizaProduto(id: number, produto: Produto) {
    this.http.put(this.baseUrl + 'produto/atualiza/' + id, produto).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  removeProduto(id: number) {
    return this.http.delete<Array<Produto>>(this.baseUrl + id);
  }

  consultaPrecoProduto(id: number): Observable<number> {
    return this.http
      .get(this.baseUrl + 'produto/preco/' + id)
      .map(objWrapper => objWrapper['obj']);
  }

  consultaDisponibilidadeProduto(id: number): Observable<boolean> {
    return this.http
      .get(this.baseUrl + 'produto/disponibilidade/' + id)
      .map(objWrapper => objWrapper['obj']);
  }

  consultaQuantidadeDisponivelProduto(id: number) {
    return this.http.get<number>(this.baseUrl + 'produto/quantidade/' + id);
  }

  ordenarProdutosPorNome(): Observable<Produto[]> {
    return this.http.get<Array<Produto>>(this.baseUrl + 'produto/ordenar-nome');
  }

  ordenarProdutosPorCategoria(): Observable<Produto[]> {
    return this.http.get<Array<Produto>>(this.baseUrl + 'produto/ordenar-categoria');
  }

  ordenarProdutosPorFabricante(): Observable<Produto[]> {
    return this.http.get<Array<Produto>>(this.baseUrl + 'produto/ordenar-fabricante');
  }

  ordenarProdutosPorPreco(): Observable<Produto[]> {
    return this.http.get<Array<Produto>>(this.baseUrl + 'produto/ordenar-preco');
  }

  listaCategorias() {
    return this.http.get<Array<string>>(this.baseUrl + '/lista-categoria').map(objWrapper => objWrapper['obj']);
  }

  atribuiDescontoACategoria(categoria: string, desconto: string) {
    this.http.post(this.baseUrl + 'categoria/' + categoria + '/desconto/' + desconto, null).subscribe();
  }
}
