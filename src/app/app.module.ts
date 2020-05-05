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
import { DocumentsComponent } from './modules/documents/documents.component';
import { ConfereComponent } from './modules/confere/confere.component';
import { HopitalComponent } from './modules/hopital/hopital.component';

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
    DocumentsComponent,
    ConfereComponent,
    HopitalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
