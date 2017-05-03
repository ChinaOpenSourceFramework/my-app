import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
  
})
export class LoginComponent implements OnInit {
  
    loginName :String; 
    password :String;
  constructor(private loginService : LoginService) { }

  ngOnInit() {
      
  }
    login(){
    this.loginService.login(this.loginName , this.password).then();
    }
}
