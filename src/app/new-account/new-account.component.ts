import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication-service.service";



@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {


  constructor(private authenticationService:AuthenticationService) {
  }

  ngOnInit() {
  }

  onSaveUser(formData) {

    console.log(formData);

    if (formData.password !== formData.confirmedPassword) {

      alert('Les mots de passe que vous avez entrés ne correspondent pas.');

    } else {

      this.authenticationService.saveUser(formData)
        .subscribe(
          res => {
            alert('Compte creé avec succès');
          }, err => {
            console.log(err);
          }
        );
    }
  }

}

