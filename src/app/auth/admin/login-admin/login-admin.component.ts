import { AuthService } from './../../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Admin } from '../admin.model';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  private admin: Admin;

  constructor(private authService: AuthService) {
    this.admin = new Admin();
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.autenticaAdmin(this.admin).subscribe(r => console.log(r));
    this.admin = new Admin();
  }
}
