import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from './modeles/User.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public host: String = "http://localhost:8081";

  constructor(private httpClient: HttpClient) {
  }

  login(data) {
    return this.httpClient.post(this.host + "/login", data, {observe: 'response'});
  }

  saveUser(data): Observable<User> {
    return this.httpClient.post<User>(this.host + "/register", data);
  }
}

