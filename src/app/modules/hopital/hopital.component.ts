import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LettreHopital} from "../../modeles/LettreHopital.model";


@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.scss']
})
export class HopitalComponent implements OnInit {
  private listHopitaux;
  private currentLettre: LettreHopital;





  constructor(public HopitalService: PatientService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.HopitalService.getHopital("/polyclinicHospitals")
      .subscribe(data=>{
        this.listHopitaux=data;
        console.log(data);
      },err=>{console.log(err);})
  }


  onsaveLettreHopital(formdata: any) {
    let url = JSON.parse(atob(this.activatedRoute.snapshot.params["url"]));
    let dateInsert = new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log(formdata);
    let data = {
      "dateInsert": dateInsert,
      "objet":formdata.objet,
      "polyclinicHospital":{"id":formdata.hopital},
      "patient":url};
    console.log(data);
    this.HopitalService.saveLettreHopital(this.HopitalService.hosts+"/hospitalisationLettres",data)
      .subscribe(res=>{
        this.currentLettre=res;
        let paramUrl = this.activatedRoute.snapshot.params["url"];
        this.router.navigateByUrl("/dossier/"+paramUrl);
      },err=> {
        console.log(err);

      });

  }
}
