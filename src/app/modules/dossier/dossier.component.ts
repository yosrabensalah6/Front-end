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
    this.patientService.getPatient(url)
      .subscribe(data=>{
        this.currentPatient=data;
        console.log(this.currentPatient)
      },err=>{
         console.log(err);

      })
  }

}
