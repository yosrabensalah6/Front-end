import { Component, OnInit } from '@angular/core';

import {Patient} from "../modeles/Patient.model";
import {PatientService} from "../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.scss']
})
export class DossierComponent implements OnInit {
  private currentPatient: Patient;









  constructor(public patientService: PatientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    let url=JSON.parse(atob(this.activatedRoute.snapshot.params["url"]));

    console.log('*****************',url);
    this.patientService.getPatient(url)
      .subscribe(data=>{
        this.currentPatient=data;
        console.log(this.currentPatient)
      },err=>{
         console.log(err);

      })

  }

  onAjouterConsultation(patient){
    let url = btoa(JSON.stringify(patient._links.patient.href));
    this.router.navigateByUrl("/visites/" + url);
  }

  onAjouterCertif(patient) {
    let url = btoa(JSON.stringify(patient._links.patient.href));
    this.router.navigateByUrl("/bilans/" + url);
  }



onAjouterLettreToConfer(patient) {
  let url = btoa(JSON.stringify(patient._links.patient.href));
  this.router.navigateByUrl("/confere/" + url);
}

  onAjouterLettreToHopital(patient) {
    let url = btoa(JSON.stringify(patient._links.patient.href));
    this.router.navigateByUrl("/hopital/" + url);
  }


}
