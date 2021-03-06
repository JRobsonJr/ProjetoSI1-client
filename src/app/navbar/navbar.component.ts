import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logoutAdmin();
  }

  recuperaNomeAdmin() {
    return this.authService.recuperaNomeAdmin();
  }

  adminEstaAutenticado() {
    return this.authService.adminEstaAutenticado();
  }
}
