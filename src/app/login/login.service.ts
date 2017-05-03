import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    private heroesUrl = 'http://120.55.171.108:38080/system/login/signIn';  // URL to web api

    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) { }

    login(loginName :String,password :String): Promise<String> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ loginName : loginName,password : password }), {headers: this.headers})
            .toPromise()
            .then(res => res.json().message as String)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
