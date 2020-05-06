import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppointmentModel} from "../modeles/Appointment.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MetiersService {
  public host:String="http://localhost:8080";
  constructor(private httpClient :HttpClient) { }
  public  saveResources(url,data):Observable<AppointmentModel> {
    return this.httpClient.post<AppointmentModel>(url,data);
  }
  public getMet(page:number,size:number){
    return this.httpClient.get(this.host+"/appointments?page="+page+"&size="+size  );
  }
}
