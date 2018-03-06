import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Lote } from './lote.model';

@Injectable()
export class LoteService {
  private result: any;
  private baseUrl = 'https://estoque-facil-server.herokuapp.com/lote';

  constructor(private http: Http) {}

  listaLotes() {
    return this.http
    .get(this.baseUrl)
    .map(result => (this.result = result.json() as Array<Lote>));
  }

  cadastraLote(id: number, lote: Lote) {
    this.http.post(this.baseUrl + '/produto/' + id + '/lote', lote).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
