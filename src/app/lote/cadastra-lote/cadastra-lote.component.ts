import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Lote } from "../lote.model";
import { ProdutoService } from "../../produto/produto.service";
import { Produto } from "../../produto/produto.model";
import { LoteService } from "../lote.service";

@Component({
  selector: "app-cadastra-lote",
  templateUrl: "./cadastra-lote.component.html",
  styleUrls: ["./cadastra-lote.component.css"]
})
export class CadastraLoteComponent implements OnInit {
  private id: number;
  private lote: Lote;
  private produtos: Array<Produto>;

  constructor(private produtoService: ProdutoService, private loteService: LoteService) {
    this.lote = new Lote();
  }

  ngOnInit() {
    this.produtoService
      .listaProdutos()
      .subscribe(produtos => (this.produtos = produtos));
  }

  onSubmit(form: NgForm) {
    this.loteService.listaLotes().subscribe(rs => console.log(rs));
    this.loteService.cadastraLote(this.id, this.lote);
    this.lote = new Lote();
  }
}
