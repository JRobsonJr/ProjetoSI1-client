import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Admin } from './admin/admin.model';

@Injectable()
export class AuthService {
  private admin: Admin;
  private token: string;
  private baseUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.baseUrl = 'https://estoque-facil-server.herokuapp.com/';
  }

  autenticaAdmin(admin: Admin) {
    return this.http
      .post(this.baseUrl + 'autenticar', admin)
      .map(token => {
        this.admin = admin;
        localStorage.setItem('token', token as string);
        return token as string;
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
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  recuperaToken(): string {
    return localStorage.getItem('token');
  }

  recuperaNomeAdmin(): string {
    return this.admin.nome;
  }
}
