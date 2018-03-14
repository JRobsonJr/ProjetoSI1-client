import { Component, OnInit } from '@angular/core';

import { ProdutoService } from './../produto.service';

@Component({
  selector: 'app-desconto',
  templateUrl: './desconto.component.html',
  styleUrls: ['./desconto.component.css']
})
export class DescontoComponent implements OnInit {
  categorias: Array<string> = new Array<string>();
  categoria: string;
  desconto: string;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.recuperaCategorias();
  }

  onSubmit() {
    this.produtoService.atribuiDescontoACategoria(this.categoria, this.desconto);
  }

  recuperaCategorias() {
    this.produtoService
      .listaCategorias()
      .subscribe(categorias => (this.categorias = categorias));
  }
}
