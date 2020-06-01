import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../authentication-service.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
