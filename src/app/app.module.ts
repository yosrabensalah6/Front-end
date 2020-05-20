import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { PatientsComponent } from './modules/patients/patients.component';
import { AppointmentComponent } from './modules/appointment/appointment.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from "@angular/material/icon";
import { DossierComponent } from './modules/dossier/dossier.component';
import { OrdonnancesComponent } from './modules/ordonnances/ordonnances.component';
import { VisitesComponent } from './modules/visites/visites.component';
import { BilansComponent } from './modules/bilans/bilans.component';
import { ConfereComponent } from './modules/confere/confere.component';
import { HopitalComponent } from './modules/hopital/hopital.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { DetailsOrdonnanceComponent } from './modules/details-ordonnance/details-ordonnance.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    AppointmentComponent,
    SettingsComponent,
    LoginComponent,
    DossierComponent,
    OrdonnancesComponent,
    VisitesComponent,
    BilansComponent,
    ConfereComponent,
    HopitalComponent,
    DetailsOrdonnanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
