import { Component, OnInit } from "@angular/core";
import { Produto } from "../produto.model";
import { ProdutoService } from "../produto.service";

@Component({
  selector: "app-lista-produtos",
  templateUrl: "./lista-produtos.component.html",
  styleUrls: ["./lista-produtos.component.css"]
})
export class ListaProdutosComponent implements OnInit {
  private produtos: Array<Produto> = new Array<Produto>();

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService
      .listaProdutos()
      .subscribe(produtos => (this.produtos = produtos));
  }

  deletaProduto (id: number) {
    this.produtoService.removeProduto(id);
  }

  consultaDisponibilidadeProduto (id: number) {
    return this.produtoService.consultaDisponibilidadeProduto(id);
  }
}
