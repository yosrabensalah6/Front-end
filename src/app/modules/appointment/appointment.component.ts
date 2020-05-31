import { Component, OnInit } from '@angular/core';
import {RDVService} from "../../services/RDV.service";
import {Router} from "@angular/router";
import {AppointmentModel} from "../../modeles/Appointment.model";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {



  private currentAppointment: AppointmentModel;
  private totalpages: number;
  private size: number=4;


  private pageAppointments: Array<number>;
  private currentpageAppointment: number=0;
  private listAppointments;



  constructor(private RDVService:RDVService, private router:Router) { }

  ngOnInit() {
    this.OngetAppointments();
  }

  OngetAppointments() {
    this.RDVService.getAppointment(this.currentpageAppointment,this.size)
      .subscribe(data => {
        this.totalpages = data['page'].totalPages;
        this.pageAppointments= new Array<number>(this.totalpages);
        this.listAppointments = data
      }, err => {
        console.log(err);
      });
  }

  onPageAppointment(i) {
    this.currentpageAppointment = i;
    this.OngetAppointments();
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
   let data={
       'firstname':formdata.firstname,
       'lastname':formdata.lastname,
       'date':formdata.date+
       " "+formdata.time};
    console.log(data);
   this.RDVService.saveResources(this.RDVService.host+'/appointments',data)
     .subscribe(res=>{
       this.currentAppointment=res;
       this.OngetAppointments();
       },err=>{
       console.log(err);
       }

     )

  }

  onDeleteAppointment(appointment) {
    let conf = confirm("etes vous sure ?");
    if (conf) {
      this.RDVService.DeleteResources(appointment._links.self.href)
        .subscribe(data => {

          this.OngetAppointments();
        }, err => {
          console.log(err);
        })
    }
  }
}
