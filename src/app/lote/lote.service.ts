import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lote } from './lote.model';

@Injectable()
export class LoteService {
  private result: any;
  private baseUrl = 'https://estoque-facil-server.herokuapp.com/lote/';

  constructor(private http: HttpClient) { }

  listaLotes() {
    return this.http
      .get(this.baseUrl)
      .map(result => (this.result = result as Array<Lote>));
  }

  cadastraLote(id: number, lote: Lote) {
    this.http.post(this.baseUrl + 'produto/' + id, lote).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
