import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Admin } from './admin/admin.model';

@Injectable()
export class AuthService {
  private token: string;
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://estoque-facil-server.herokuapp.com/';
  }

  autenticaAdmin(admin: Admin) {
    return this.http
      .post(this.baseUrl + 'autenticar', admin)
      .map(token => (this.token = token.json() as string));
  }

  cadastraAdmin(admin: Admin) {
    this.http.post(this.baseUrl + 'cadastrar', admin);
  }

  logoutAdmin() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }
}
