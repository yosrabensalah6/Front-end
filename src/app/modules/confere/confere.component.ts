import { Component, OnInit } from '@angular/core';
import {PatientService} from "../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LettreConfer} from "../modeles/LettreConfer.medel";

@Component({
  selector: 'app-confere',
  templateUrl: './confere.component.html',
  styleUrls: ['./confere.component.scss']
})
export class ConfereComponent implements OnInit {

  private currentLettre: LettreConfer;
  private listConfer;




  constructor(public ConferService: PatientService, private activatedRoute: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.ConferService.getConfer('/confers')
      .subscribe(data=>{
        this.listConfer=data;
        console.log(data);
      },err=>{
        console.log(err);

      })
  }

  onsaveLettre(formdata: any) {
     let url = JSON.parse(atob(this.activatedRoute.snapshot.params["url"]));
    console.log(formdata);
    let data = {
      "dateInsert": formdata.dateInsert,
      "objet":formdata.objet,
      "description":formdata.description,
      "confer":formdata.confer,
      "patient":url};


    console.log(data);
    this.ConferService.onSaveLettreConfer(this.ConferService.hosts+"/letterToConfers",data)
      .subscribe(res=>{
          this.currentLettre=res;
          let paramUrl = this.activatedRoute.snapshot.params["url"];
          this.router.navigateByUrl("/dossier/"+paramUrl);
        },err=> {
        console.log(err);

      });
  }
}
