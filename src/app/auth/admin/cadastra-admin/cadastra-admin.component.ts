import { Component, OnInit } from '@angular/core';

import { Admin } from '../admin.model';
import { AuthService } from './../../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastra-admin',
  templateUrl: './cadastra-admin.component.html',
  styleUrls: ['./cadastra-admin.component.css']
})
export class CadastraAdminComponent implements OnInit {

  private admin: Admin;

  constructor(private authService: AuthService) {
    this.admin = new Admin();
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.cadastraAdmin(this.admin);
  }

}
