import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details-ordonnance',
  templateUrl: './details-ordonnance.component.html',
  styleUrls: ['./details-ordonnance.component.scss']
})
export class DetailsOrdonnanceComponent implements OnInit {
  private listligneordonnance;


  constructor(private OrdonnanceService:PatientService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.onGetLigneOrdonnance();
  }
onGetLigneOrdonnance(){
    let url=atob(this.activatedRoute.snapshot.params["url"]);
    this.OrdonnanceService.getOrdonnance("/ordonnances/"+url+"/ligneOrdonnances")
      .subscribe(
        res=>{this.listligneordonnance=res;
        console.log(res);},err=>{console.log(err)}

      )
}

}
