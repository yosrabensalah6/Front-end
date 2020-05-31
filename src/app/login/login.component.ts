import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication-service.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authService : AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(data) {
   this.authService.login(data)
     .subscribe(
       rep=>{
           console.log(rep);
       },err=>{console.log(err);}
     )
  }
}
