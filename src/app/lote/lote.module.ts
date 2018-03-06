import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoteRoutingModule } from './lote-routing.module';
import { CadastraLoteComponent } from './cadastra-lote/cadastra-lote.component';
import { ListaLotesComponent } from './lista-lotes/lista-lotes.component';
import { ProdutoService } from '../produto/produto.service';
import { FormsModule } from '@angular/forms';
import { LoteService } from './lote.service';

@NgModule({
  imports: [
    CommonModule,
    LoteRoutingModule,
    FormsModule
  ],
  declarations: [CadastraLoteComponent, ListaLotesComponent],
  providers: [ProdutoService, LoteService]
})
export class LoteModule { }
