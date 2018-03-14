import { Component, OnInit } from '@angular/core';

import { VendaService } from './../venda.service';
import { VendaItem } from './../venda-item.model';

@Component({
  selector: 'app-lista-vendas',
  templateUrl: './lista-vendas.component.html',
  styleUrls: ['./lista-vendas.component.css']
})
export class ListaVendasComponent implements OnInit {
  carrinhoDeCompras: Array<VendaItem>;

  constructor(private vendaService: VendaService) {
    this.carrinhoDeCompras = new Array<VendaItem>();
  }

  ngOnInit() {}

}
