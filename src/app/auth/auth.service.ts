import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Admin } from './admin/admin.model';

@Injectable()
export class AuthService {
  private admin: Admin;
  private token: string;
  private baseUrl: string;

  constructor(private http: Http, private router: Router) {
    this.baseUrl = 'https://estoque-facil-server.herokuapp.com/';
  }

  autenticaAdmin(admin: Admin) {
    return this.http
      .post(this.baseUrl + 'autenticar', admin)
      .map(token => {
        this.admin = admin;
        console.log(token);
        return (this.token = token.json() as string);
      });
  }

  cadastraAdmin(admin: Admin) {
    this.http.post(this.baseUrl + 'cadastrar', admin).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  adminEstaAutenticado(): boolean {
    return this.recuperaToken() !== null;
  }

  logoutAdmin() {
    this.token = null;
    this.router.navigate(['/login']);
  }

  recuperaToken(): string {
    return localStorage.getItem('token');
  }

  recuperaNomeAdmin(): string {
    return this.admin.nome;
  }
}
