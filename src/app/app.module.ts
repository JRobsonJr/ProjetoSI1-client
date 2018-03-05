import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoteModule } from './lote/lote.module';
import { ClienteViewModule } from './cliente-view/cliente-view.module';
import { AuthModule } from './auth/auth.module';
import { PainelDeControleModule } from './painel-de-controle/painel-de-controle.module';
import { ProdutoModule } from './produto/produto.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ProdutoModule,
    PainelDeControleModule,
    AuthModule,
    ClienteViewModule,
    LoteModule,
    HttpModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
