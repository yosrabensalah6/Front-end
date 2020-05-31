import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Visite} from "../../modeles/Visite.model";

@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.scss']
})
export class VisitesComponent implements OnInit {
  private currentVisite: Visite;
  private patient;
  private paramUrl: string;


  constructor(public VisiteService: PatientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit():void {

  }

  onSaveVisite(formdata: any) {
    let url = JSON.parse(atob(this.activatedRoute.snapshot.params["url"]));

    console.log(url);
    let dateInsert = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let data = {
      "dateInsert":dateInsert,
      "motif": formdata.motif,
      "temperature": formdata.temperature,
      "bloodpressure": formdata.bloodpressure,
      "weight": formdata.weight,
      "patient":url,

    };
    console.log(data);
    this.VisiteService.saveVisite(this.VisiteService.hosts+"/consultations",data)
  .subscribe(res=>{
        this.currentVisite=res;
      let paramUrl = this.activatedRoute.snapshot.params["url"];
      this.router.navigateByUrl("/dossier/"+paramUrl);
      },err=>{
        console.log(err);
      }

    )
  }
}
