import { Component, OnInit } from "@angular/core";

import { Lote } from "../lote.model";
import { LoteService } from "../lote.service";

@Component({
  selector: "app-lista-lotes",
  templateUrl: "./lista-lotes.component.html",
  styleUrls: ["./lista-lotes.component.css"]
})
export class ListaLotesComponent implements OnInit {
  private lotes: Array<Lote> = new Array<Lote>();

  constructor(private loteService: LoteService) {
  }

  ngOnInit() {
    this.atualizaListaLotes();
  }

  atualizaListaLotes() {
    this.loteService.listaLotes().subscribe(lotes => (this.lotes = lotes));
  }
}
