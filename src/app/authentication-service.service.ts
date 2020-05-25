import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  public hosts:String="http://localhost:8080";

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post(this.hosts+"/login",data,{observe:'response'});
  }
}
