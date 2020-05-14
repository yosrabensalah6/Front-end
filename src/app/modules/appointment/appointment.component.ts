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
  onChercher(formdata:any){
    console.log(formdata);
    this.RDVService.getRessouces('/appointments/search/byDate?date='+formdata.date)
      .subscribe(
        data =>{
          this.listAppointments=data;
        },err=>{
          console.log(err);
        }
      )
  }

  onSaveRDV(formdata: any) {
   console.log('***********************',formdata);
   let data={'firstname':formdata.firstname,'lastname':formdata.lastname,'date':formdata.date+" "+formdata.time};
    console.log(data);
   this.RDVService.saveResources(this.RDVService.host+'/appointments',data)
     .subscribe(res=>{
       this.currentRDV=res;
       this.mode=2;
       },err=>{
       console.log(err);
       }

     )

  }

  onDeleteAppoint(appointment) {
    let conf = confirm("etes vous sure ?");
    if (conf) {
      this.RDVService.DeleteResources(appointment._links.self.href)
        .subscribe(data => {
          this.onChercher(data);
        }, err => {
          console.log(err);
        })
    }
  }
}
