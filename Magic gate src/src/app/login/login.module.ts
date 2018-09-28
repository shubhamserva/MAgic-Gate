import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthService,FacebookLoginProvider,GoogleLoginProvider} from 'angular-6-social-login';
import { ForumComponent } from './forum/forum.component';
import {LoginRoutingModule} from './login-routing.module'
@NgModule({
  imports: [
    CommonModule,LoginRoutingModule
  ],
  declarations: [LoginComponent, ForumComponent]
})
export class LoginModule { }
