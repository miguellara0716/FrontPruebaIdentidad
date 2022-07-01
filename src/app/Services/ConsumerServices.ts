import {Injectable} from '@angular/core';
import {SaveRegisterI} from '../Models/SaveRegistersInterface'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
    providedIn:'root'
})
export class ConsumerServices{
    url:string = 'https://localhost:44386/api/CSV/';
    UserName:string ='Admin';
    Password:string = 'Admin1234+';
    constructor(private http:HttpClient){}


    SaveRegisters(data:string):Observable<void>{
            let Credentials = this.getCredentials();      
            let Headers = new HttpHeaders()
            .set('Authorization', Credentials)
            .set("Content-Type", "application/json");
            let endpoint = this.url + 'Save';
            return this.http.post<void>(endpoint, data, {headers:Headers} );
    }  
    

    getCredentials():string{
        let Credentials =  window.btoa(this.UserName+':'+this.Password);
        return 'Basic '+Credentials;

    }
}
