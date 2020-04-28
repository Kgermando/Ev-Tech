import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, RequestPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
