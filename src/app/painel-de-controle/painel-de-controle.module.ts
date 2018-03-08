import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelDeControleRoutingModule } from './painel-de-controle-routing.module';
import { PainelDeControleComponent } from './painel-de-controle.component';

@NgModule({
  imports: [
    CommonModule,
    PainelDeControleRoutingModule
  ],
  declarations: [PainelDeControleComponent]
})
export class PainelDeControleModule { }
