import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() {
  }
  showFormAddHospital :Boolean = false;
  showFormAddMedicament:Boolean = false;
  showFormAddConfer :Boolean = false;


  ngOnInit() {
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


}
