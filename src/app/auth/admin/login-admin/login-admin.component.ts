import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Admin } from '../admin.model';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  private admin: Admin;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
    this.admin = new Admin();
  }

  ngOnInit() {
    if (this.estaAutenticado()) {
      this.router.navigate(['/painel-de-controle']);
    }
  }

  onSubmit(form: NgForm) {
    this.authService.autenticaAdmin(this.admin).subscribe(token => {
      if (this.estaAutenticado()) {
        this.router.navigate(['/painel-de-controle']);
      }
    }, err => console.log(err));
    this.admin = new Admin();
  }

  estaAutenticado() {
    return this.authService.recuperaToken() !== null;
  }
}
