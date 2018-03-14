import { Component, OnInit } from '@angular/core';

import { Admin } from '../admin.model';
import { AuthService } from './../../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-admin',
  templateUrl: './cadastra-admin.component.html',
  styleUrls: ['./cadastra-admin.component.css']
})
export class CadastraAdminComponent implements OnInit {

  private admin: Admin;

  constructor(private authService: AuthService, private router: Router) {
    this.admin = new Admin();
  }

  ngOnInit() {
    if (this.estaAutenticado()) {
      this.router.navigate(['/painel-de-controle']);
    }
  }

  onSubmit(form: NgForm) {
    this.authService.cadastraAdmin(this.admin);
    this.admin = new Admin();
  }

  estaAutenticado() {
    return this.authService.adminEstaAutenticado();
  }
}
