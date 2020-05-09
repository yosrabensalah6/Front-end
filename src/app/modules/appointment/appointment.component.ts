import { Component, OnInit } from '@angular/core';
import {RDVService} from "../services/RDV.service";
import {Router} from "@angular/router";
import {AppointmentModel} from "../modeles/Appointment.model";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {




  private currentRDV: AppointmentModel;
  private mode: number=1;
  private listAppointments;

  private RDV;

  constructor(private RDVService:RDVService, private router:Router) { }

  ngOnInit() {
    this.getAppointmentsCurrentDay();
  }

  getAppointmentsCurrentDay() {
    this.RDVService.getRessouces('/appointments')
      .subscribe(data => {
        this.listAppointments = data;

      }, err => {
        console.log(err);
      });
  }

  onChercher(formdata: any) {
    console.log(formdata);
    this.RDVService.getRessouces('/appointments/search/byDate?date=' + formdata.date)
      .subscribe(data => {
        this.listAppointments = data;

      }, err => {
        console.log(err);
      });
  }


  onSaveRDV(data: any) {
    this.RDVService.saveResources(this.RDVService.host+"/appointments",data)
      .subscribe(res=>{

        this.currentRDV=res;
        this.mode=2;
      },err=>{
        console.log(err)
      })
  }

}
