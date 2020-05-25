import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Patient} from "../modeles/Patient.model";
import {Visite} from "../modeles/Visite.model";
import {Certif} from "../modeles/Certif.model";
import {LettreConfer} from "../modeles/LettreConfer.medel";
import {LettreHopital} from "../modeles/LettreHopital.model";
import {OrdonnancesComponent} from "../ordonnances/ordonnances.component";
import {Ordonnance} from "../modeles/Ordonnance.model";
import {LigneOrdonnance} from "../modeles/LigneOrdonnance.model";
import {Medicament} from "../modeles/Medicament.model";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) {
  }

  public hosts: String = "http://localhost:8080";

  public saveResources(url, data): Observable<Patient> {
    return this.httpClient.post<Patient>(url, data);
  }

  public getRessouces(url) {
    return this.httpClient.get(this.hosts + url)
  }

  deleteRessource(url) {
    return this.httpClient.delete(url);
  }

  public saveVisite(url, data): Observable<Visite> {
    return this.httpClient.post<Visite>(url, data)
  }

  public saveCertif(url, data): Observable<Certif> {
    return this.httpClient.post<Certif>(url, data);
  }

  getPatient(url): Observable<Patient> {
    return this.httpClient.get<Patient>(url);

  }

  getConfer(url) {
    return this.httpClient.get(this.hosts + url);

  }

  onSaveLettreConfer(url, data): Observable<LettreConfer> {
    return this.httpClient.post<LettreConfer>(url, data);

  }

  getHopital(url) {
    return this.httpClient.get(this.hosts + url);

  }

  saveLettreHopital(url, data): Observable<LettreHopital> {
    return this.httpClient.post<LettreHopital>(url, data);

  }

  public saveOrdonnance(url, data): Observable<Ordonnance> {
    return this.httpClient.post<Ordonnance>(url, data);

  }

  public saveLigneOrdonnance(url, data): Observable<LigneOrdonnance> {
    return this.httpClient.post<LigneOrdonnance>(url, data);
  }

  public getOrdonnance(url) {
    return this.httpClient.get(this.hosts + url);
  }

  public DeleteResources(url) {
    return this.httpClient.delete(url);
  }


}
