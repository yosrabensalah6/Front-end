import { Component, OnInit } from '@angular/core';
import {PatientService} from "../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Certif} from "../modeles/Certif.model";

@Component({
  selector: 'app-bilans',
  templateUrl: './bilans.component.html',
  styleUrls: ['./bilans.component.scss']
})
export class BilansComponent implements OnInit {
  private currentCertif: Certif;

  constructor(public CertifService: PatientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  onsaveCertif(formdata: any) {
    let url = JSON.parse(atob(this.activatedRoute.snapshot.params["url"]));
    let data = {
      "dateInsert": formdata.dateInsert,
      "datedebut":formdata.datedebut,
      "datefin":formdata.datefin,
      "description":formdata.description,
      "patient":url,

    };
    console.log(data);
    this.CertifService.saveCertif(this.CertifService.hosts+"/medicalCertificates",data)
      .subscribe(res=>{
          this.currentCertif=res;
          let paramUrl = this.activatedRoute.snapshot.params["url"];
          this.router.navigateByUrl("/dossier/"+paramUrl);
        },err=>{
          console.log(err);
        }

      )

  }
}
