import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider} from "angularx-social-login";
import { SocialUser } from "angularx-social-login";



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  
    form: FormGroup;
    user: any;
    loginStatus = false;
    formValidateFlag: boolean;
    enterFlag =  true;
    private user1: SocialUser;
    private loggedIn: boolean;
  
    constructor(
     private router: Router,
      private authService: AuthService) { }
  
    ngOnInit() {
      this.form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email ,
            Validators.pattern('[A-Za-z][A-Z0-9a-z\.]*@[A-Za-z][A-Za-z0-9]+[\.][A-Za-z]{2,3}')]),
        password: new FormControl('', [Validators.required,
          Validators.minLength(8), Validators.maxLength(20)]),
      });
      this.formValidateFlag = true;
  
      {
        this.authService.authState.subscribe((user1) => {
          this.user1 = user1;
          this.loggedIn = (user1 != null);
        });
      }
    }
  
    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
   
    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
  
    signOut(): void {
      this.authService.signOut();
    }
  
    // userLogin() {
    //   this.spinner.show();
    //   this.enterFlag = false;
    //   const patientLogin: Patientlogin = new Patientlogin();
    //   patientLogin.emailId = this.form.get('email').value;
    //   patientLogin.password = this.form.get('password').value;
    //   this.service.getPatient(patientLogin).subscribe(data => {
    //     this.spinner.hide();
    //     this.user = data;
    //     if (this.user != null) {
    //       localStorage.setItem('user', JSON.stringify(this.user));
    //       this.loginStatus = true;
    //       this.serv.setLoginStatus(true); 
    //       if (this.serv.giveDoctorEmail() === null) {
    //       this.router.navigateByUrl('/home');
    //       } else {
    //         this.router.navigateByUrl('/booking');
    //       }
    //     } else {
    //       this.formValidateFlag = false;
    //       this.enterFlag = true;
    //     }
    //   },
    //   (error: any) => {
    //     this.spinner.hide();
    //     this.router.navigate(['/main-handler', {bool: true}]);
    //     });
    // }
  }
  
  
