import { Injectable } from '@angular/core'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {HttpErrorResponse} from '@angular/common/http/src/response'
// import { Observable } from 'rxjs/Observable';
@Injectable()
export class LoginService
{
    private email: String;
    private url = "base"
    constructor(private http:HttpClient){}

    getDetails(Id:String)
    {
        // return this.http.post(this.url+'/data',this.email).catch(this.errorhandler);
    }

    errorhandler(error:HttpErrorResponse)
    {
        // return Observabel
    }


}