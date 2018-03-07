import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { CadastraAdminComponent } from './admin/cadastra-admin/cadastra-admin.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [LoginAdminComponent, CadastraAdminComponent],
  providers: [AuthService]
})
export class AuthModule { }
