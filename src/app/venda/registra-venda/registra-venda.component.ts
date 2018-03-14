import { Component, OnInit } from '@angular/core';

import { VendaService } from './../venda.service';
import { VendaItem } from './../venda-item.model';
import { Produto } from './../../produto/produto.model';

@Component({
  selector: 'app-registra-venda',
  templateUrl: './registra-venda.component.html',
  styleUrls: ['./registra-venda.component.css']
})
export class RegistraVendaComponent implements OnInit {
  carrinhoDeCompras: Array<VendaItem>;
  produtos: Array<Produto>;
  data: string;

  constructor(private vendaService: VendaService) {
    this.carrinhoDeCompras = new Array<VendaItem>();
    this.recuperaProdutos();
  }

  ngOnInit() {
  }

  recuperaProdutos() {
    this.vendaService
      .recuperaProdutos()
      .subscribe(produtos => (this.produtos = produtos));
  }

  adicionaAoCarrinho(idProduto: number, quantidade: number) {
    const vendaItem: VendaItem = new VendaItem();

    return this.vendaService.consultaProduto(idProduto).subscribe(produto => {
      vendaItem.produto = produto;
      vendaItem.quantidade = quantidade;

      this.carrinhoDeCompras.push(vendaItem);
    });
  }

  removeItemDoCarrinho(idProduto: number) {
    this.carrinhoDeCompras = this.carrinhoDeCompras.filter(
      vendaItem => vendaItem.produto.id !== idProduto
    );
  }

  onSubmit() {
    this.vendaService.cadastraVenda(this.carrinhoDeCompras, this.data);
    this.carrinhoDeCompras = new Array<VendaItem>();
  }

}
