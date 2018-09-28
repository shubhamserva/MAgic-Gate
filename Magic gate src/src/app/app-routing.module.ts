import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import {LoginComponent} from './login/login/login.component'
import {AppComponent} from './app.component'
import {SignUpComponent} from './sign-up/sign-up.component'
import {UploadComponent} from './upload/upload.component'

const routes:Routes=
[
  {path:'',redirectTo:'/upload',pathMatch:'full'},
  {path:'upload',component:UploadComponent},
  {path:'login', loadChildren:'./login/login.module#LoginModule'},
  {path:'signup',component:SignUpComponent},
  
  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
