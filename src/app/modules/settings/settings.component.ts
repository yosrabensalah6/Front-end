import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../services/settings.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Confer} from "../modeles/Confer.model";
import {Hopital} from "../modeles/Hopital.model";
import {Medicament} from "../modeles/Medicament.model";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  showFormAddHospital: Boolean = false;
  showFormAddMedicament: Boolean = false;
  showFormAddConfer: Boolean = false;


  public size: number = 2;
  public totalpages: number;

  public currentPagePolyclinicHospital: number = 0;
  public pagePolyclinicHospitals: Array<number>;
  public listPolyclinicHospitals: any;

  public currentPageMedicament: number = 0;
  public pageMedicaments: Array<number>;
  public listMedicaments: any;

  public currentPageConfer: number = 0;
  public pageConfers: Array<number>;
  public listConfers: any;
  private currentConfer: Confer;
  private currentHopital: Hopital;
  private currentMedicament: Medicament;

  constructor(private settingsService: SettingsService, private router: Router) {
  }

  ngOnInit() {
    this.onGetPolyclinicHospitals();
    this.onGetMedicaments();
    this.onGetConfers();
  }

  showForm(value: any) {
    if (value === 'Hospital') {
      this.showFormAddHospital = true;
    } else if (value === 'Medicament') {
      this.showFormAddMedicament = true;
    } else {
      this.showFormAddConfer = true;
    }
  }
  hideForm(value: any) {
    if (value === 'Hospital') {
      this.showFormAddHospital = false;
    } else if (value === 'Medicament') {
      this.showFormAddMedicament = false;
    } else {
      this.showFormAddConfer = false;
    }
  }


  onGetPolyclinicHospitals(): void {
    this.settingsService.getPolyclinicHospitals(this.currentPagePolyclinicHospital, this.size)
      .subscribe(data => {
        this.totalpages = data['page'].totalPages;
        this.pagePolyclinicHospitals = new Array<number>(this.totalpages)
        this.listPolyclinicHospitals = data;
      }, err => {
        console.log(err);
      });
  }

  onPagePolyclinicHospitals(i) {
    this.currentPagePolyclinicHospital = i;
    this.onGetPolyclinicHospitals();
  }

  onGetMedicaments(): void {
    this.settingsService.getMedicaments(this.currentPageMedicament, this.size)
      .subscribe(data => {
        this.totalpages = data['page'].totalPages;
        this.pageMedicaments = new Array<number>(this.totalpages)
        this.listMedicaments = data;
      }, err => {
        console.log(err);
      });
  }

  onPageMedicaments(i) {
    this.currentPageMedicament = i;
    this.onGetMedicaments();
  }

  onGetConfers(): void {
    this.settingsService.getConfers(this.currentPageConfer, this.size)
      .subscribe(data => {
        this.totalpages = data['page'].totalPages;
        this.pageConfers = new Array<number>(this.totalpages)
        this.listConfers = data;
      }, err => {
        console.log(err);
      });
  }

  onPageConfer(i) {
    this.currentPageConfer = i;
    this.onGetConfers();
  }

onSaveConfer(formdata){
  let dateInsert = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let data={
      "firstname":formdata.firstname,
    "lastname":formdata.lastname,
    "telephone":formdata.telephone,
    "adresse":formdata.adresse,
    "dateInsert":dateInsert,
    "specialite":formdata.specialite};
    console.log(data);
    this.settingsService.saveConfer(this.settingsService.host+"/confers",data)
      .subscribe(res=>{
        this.currentConfer=res;
        console.log(res);
  },err=>{console.log(err)}

      )

}

  onSaveHopital(formdata: any) {
    let dateInsert = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let data={
      "name":formdata.name,
      "adresse":formdata.adresse,
      "dateInsert":dateInsert,
    };
    console.log(data);
    this.settingsService.saveHopital(this.settingsService.host+"/polyclinicHospitals",data)
      .subscribe(
        res=>{
          this.currentHopital=res;
          console.log(res);
        },err=>{console.log(err);}
      )}


  onSaveMedicment(formdata) {
    let dateInsert = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let data = {
    "nom":formdata.nom,
      "type":formdata.type,
      "description":formdata.description,
      "dateInsert":dateInsert,
    };
    console.log(data);
    this.settingsService.saveMedicament(this.settingsService.host+"/medicaments",data)
      .subscribe(res=>{
        this.currentMedicament=res;

        console.log(res);
      },err=>{console.log(err);})
  }
}
