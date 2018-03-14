import { Component, OnInit } from '@angular/core';

import { RelatorioService } from './relatorio.service';
@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  vendas: Array<any>;
  totalVendas: number;
  lotesTotal: number;
  produtosTotal: number;
  validades: Array<string>;

  constructor(private relatorioService: RelatorioService) { }

  ngOnInit() {
    this.listarVendas();
    this.recuperaInformacoes();
  }

  calculaTotalDeVendas() {
    return this.relatorioService.calculaTotalDeVendas().subscribe(total => this.totalVendas = total);
  }

  listarVendas() {
    return this.relatorioService.listarVendas().subscribe(vendas => this.vendas = vendas);
  }

  recuperaTotalLotes() {
    return this.relatorioService.recuperaTotalLotes().subscribe(lotes => this.lotesTotal = lotes);
  }

  recuperaTotalProdutos() {
    return this.relatorioService.recuperaTotalProdutos().subscribe(produtos => this.produtosTotal = produtos);
  }

  recuperaInformacoes() {
    this.recuperaTotalLotes();
    this.recuperaTotalProdutos();
    this.calculaTotalDeVendas();
  }

}
