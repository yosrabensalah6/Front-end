import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Confer} from "../modeles/Confer.model";
import {Observable} from "rxjs";
import {Hopital} from "../modeles/Hopital.model";
import {Medicament} from "../modeles/Medicament.model";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public host: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  public getConfers(page: number, size: number) {
    return this.httpClient.get(this.host + '/confers/search/byDateInsertPage?page=' + page + '&size=' + size);
  }

  public getPolyclinicHospitals(page: number, size: number) {
    return this.httpClient.get(this.host + '/polyclinicHospitals/search/byDateInsertPage?page=' + page + '&size=' + size);
  }

  public getMedicaments(page: number, size: number) {
    return this.httpClient.get(this.host + '/medicaments/search/byDateInsertPage?page=' + page + '&size=' + size);
  }
  public saveConfer(url,data):Observable<Confer>{
    return this.httpClient.post<Confer>(url,data);
  }
  public saveHopital(url,data):Observable<Hopital>{
    return this.httpClient.post<Hopital>(url,data);
  }
  public saveMedicament(url,data):Observable<Medicament>{
    return this.httpClient.post<Medicament>(url,data);
  }
}
