import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../authentication-service.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private authService:AuthenticationService) {
  }
  isAdmin(){
    return this.authService.isAdmin();
  }
  isUser(){
    return this.authService.isUser();
  }
  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  ngOnInit() {
  }

}
