import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{LoginComponent } from './login/login/login.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import  { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider} from "angularx-social-login";

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UploadComponent } from './upload/upload.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("284511243874-8oc5j9cf7h8b1cnntms0efnnifk6kcur.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2175672716089713")
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UploadComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
      MDBBootstrapModule.forRoot()
  ],
  providers: [ 

    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
