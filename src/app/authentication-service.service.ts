import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from './modeles/User.model';
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public host: String = "http://localhost:8081";
  jwt:string;
  username:string;
  roles:Array<string>;
  constructor(private httpClient: HttpClient) {
  }

  login(data) {
    return this.httpClient.post(this.host + "/login", data, {observe: 'response'});
  }

  saveUser(data): Observable<User> {
    return this.httpClient.post<User>(this.host + "/register", data);
  }

  saveToken(jwt: string) {
localStorage.setItem('token',jwt);
this.jwt=jwt;
this.parseJWT();
  }

  parseJWT() {
    let  jwtHelper=new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.obj;
    this.roles=objJWT.roles;

  }
  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
  }
  isUser(){
    return this.roles.indexOf('USER')>=0;
  }
  isAuthenticated(){
    return this.roles && (this.isAdmin() || this.isUser());
  }


}

