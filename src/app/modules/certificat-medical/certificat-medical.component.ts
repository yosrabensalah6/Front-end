import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Certif} from "../../modeles/Certif.model";

@Component({
  selector: 'app-certificat-medical',
  templateUrl: './certificat-medical.component.html',
  styleUrls: ['./certificat-medical.component.scss']
})
export class CertificatMedicalComponent implements OnInit {
  private currentCertif: Certif;

  constructor(public CertifService: PatientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }


  ngOnInit() {
  }

  onsaveCertif(formdata: any) {
    let url = JSON.parse(atob(this.activatedRoute.snapshot.params["url"]));
    let dateInsert = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let data = {
      "dateInsert": dateInsert,
      "dateDebut":formdata.dateDebut,
      "dateFin":formdata.dateFin,
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
