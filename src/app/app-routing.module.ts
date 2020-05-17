import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import {PatientsComponent} from "./modules/patients/patients.component";
import {AppointmentComponent} from "./modules/appointment/appointment.component";
import {SettingsComponent} from "./modules/settings/settings.component";
import {LoginComponent} from "./login/login.component";
import {DossierComponent} from "./modules/dossier/dossier.component";
import {OrdonnancesComponent} from "./modules/ordonnances/ordonnances.component";
import {VisitesComponent} from "./modules/visites/visites.component";
import {BilansComponent} from "./modules/bilans/bilans.component";
import {ConfereComponent} from "./modules/confere/confere.component";
import {HopitalComponent} from "./modules/hopital/hopital.component";

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
  path: '',
  component: DefaultComponent,
  children: [{
    path: 'home',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },{
    path:'patient',
    component: PatientsComponent
  },
    {
      path:'appointment',
      component: AppointmentComponent
    },{
    path: 'settings',
      component: SettingsComponent
    },{
    path:'dossier/:url',
      component: DossierComponent
    },
    {
      path:'ordonnances',
      component: OrdonnancesComponent
    },
    {
      path:'visites/:url',
      component:VisitesComponent
    },{
    path:'bilans/:url',
      component:BilansComponent
    },{
    path:'confere/:url',
      component:ConfereComponent
    },{
    path:'hopital/:url',
      component:HopitalComponent
    }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
