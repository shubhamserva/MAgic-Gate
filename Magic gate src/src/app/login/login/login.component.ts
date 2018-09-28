import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{

  private user: SocialUser;
  private loggedIn: boolean;
private visibleIframe = false;
  constructor(private authService: AuthService,private router: Router) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.displaydata();
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
            
}
displaydata()
{
  console.log("befre neinr");
  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);           
    console.log(user);        
      if(user.name != null)
      {
        
        this.router.navigateByUrl("/signup");
      }
      else
      {
          alert("Login Failed");
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  });

}


}
  
  
