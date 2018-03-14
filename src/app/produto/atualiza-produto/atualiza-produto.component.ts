import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutoService } from './../produto.service';
import { Produto } from './../produto.model';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit {
  private id: number;
  private produto: Produto = new Produto();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.recuperaProduto(this.id).subscribe(produto => {
        Object.assign(this.produto, produto);
      });
    });
  }

  ngOnInit() {}

  recuperaProduto(id: number) {
    return this.produtoService.consultaProduto(id);
  }

  onSubmit(form: NgForm) {
    this.produto.setCategoria();
    this.produtoService.atualizaProduto(this.id, this.produto);
  }
}
