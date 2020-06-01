import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authService : AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(data) {
   this.authService.login(data)
     .subscribe(
       rep=>{
           let jwt=rep.headers.get('Authorization');
           this.authService.saveToken(jwt);
           this.router.navigateByUrl("/home");
       },err=>{console.log(err);}
     )
  }
isAuthenticated(){
    return this.authService.isAuthenticated();
}
  isAdmin(){
    return this.authService.isAdmin();
  }
  isUser(){
    return this.authService.isUser();
  }



}
