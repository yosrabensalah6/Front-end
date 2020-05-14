import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AppointmentModel} from "../modeles/Appointment.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Patient} from "../modeles/Patient.model";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient :HttpClient) { }
  public hosts:String="http://localhost:8080";

  public  saveResources(url,data):Observable<Patient> {
    return this.httpClient.post<Patient>(url,data);
  }
  public getRessouces(url){
    return this.httpClient.get(this.hosts+url)
  }


  getPatient(url):Observable<Patient> {
    return this.httpClient.get<Patient>(url);

  }
}
