import { Component, OnInit } from '@angular/core';
import {PatientService} from "../services/patient.service";
import {Patient} from "../modeles/Patient.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  private currentPat: Patient;
  private listPatients;
  private patients: Patient;
  private setId: number;

  constructor( private patientService:PatientService, private router:Router) { }

  ngOnInit() {
    this.getPatients()
  }
  getPatients() {
    this.patientService.getRessouces('/patients')
      .subscribe(data => {
        this.listPatients = data;

      }, err => {
        console.log(err);
      });
  }

  onSavePatient(formdata: any) {
    let dateInsert = new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log('***********************',formdata);
    let data={'firstname':formdata.firstname,'lastname':formdata.lastname,'telephone':formdata.telephone,'birthday':formdata.birthday,
      'sexe':formdata.sexe,'numMatCNAM':formdata.numMatCNAM,'typeCNAM':formdata.typeCNAM,'validationday':formdata.validationday,
      'codeAPCI':formdata.codeAPCI,'dateInsert':dateInsert,};
    console.log(data);
    this.patientService.saveResources(this.patientService.hosts+'/patients',data)
      .subscribe(res=>{
          this.currentPat=res;
        },err=>{
          console.log(err);
        }

      )

  }
  onOpenDossier(patient){
    let url = btoa(JSON.stringify(patient._links.patient.href));
    this.router.navigateByUrl("dossier/" + url);
  }



}
