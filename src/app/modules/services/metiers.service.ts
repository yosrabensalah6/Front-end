import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MetiersService {
  public host:String="http://localhost:8080";
  constructor(private httpClient :HttpClient) { }
  public  saveResources(url,data) {
    return this.httpClient.post(url,data);
  }
  public getMet(page:number,size:number){
    return this.httpClient.get(this.host+"/appointments?page="+page+"&size="+size  );
  }
}
