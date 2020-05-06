import { Component, OnInit } from '@angular/core';
import {MetiersService} from "../services/metiers.service";
import {Router} from "@angular/router";
import {AppointmentModel} from "../modeles/Appointment.model";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  private size: number;
  private totalPages: number;
  private pages: Array<number>;
  private met;
  private currentPage: number;

  constructor(private metiersService:MetiersService,private router:Router) { }

  ngOnInit() {
  }
  onGetAppoint() {
    this.metiersService.getMet(this.currentPage,this.size)
      .subscribe(data=>
      {

        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.met=data;
      },err=>{
        console.log(err);
      })
  }
  onsaveRDV(value:any) {
  console.log(value);
  }

}
