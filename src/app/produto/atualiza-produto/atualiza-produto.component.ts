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

  constructor(private route: ActivatedRoute, private router: Router, private produtoService: ProdutoService) {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.recuperaProduto(this.id).subscribe(produto => {
         this.produto = produto;
         if (this.produto === null) {
           this.router.navigate['/nao-encontrado'];
         } 
      } );
    })
   }

  ngOnInit() {
  }

  recuperaProduto(id: number) {
    return this.produtoService.consultaProduto(id);
  }

  onSubmit(form: NgForm) {
    this.produtoService.atualizaProduto(this.id, this.produto);
  }
}
