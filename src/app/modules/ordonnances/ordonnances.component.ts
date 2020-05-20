import {Component, OnInit} from '@angular/core';
import {PatientService} from '../services/patient.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ordonnances',
  templateUrl: './ordonnances.component.html',
  styleUrls: ['./ordonnances.component.scss']
})
export class OrdonnancesComponent implements OnInit {

  private currentOrdonnance: any;
  private listLigneOrdonnances = new Array();
  private listMedicaments ;

  constructor(public PatientService: PatientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.onGetMedicaments();
  }

  onGetMedicaments() {
    this.PatientService.getRessouces('/medicaments')
      .subscribe(data => {
        this.listMedicaments = data;
      }, err => {
        console.log(err);
      });
  }

  onAddMedicamentToOrdonnance(formdata: any) {
    let splitted = formdata.medicament.split('-', 3);
    this.listLigneOrdonnances.push({
      "dosage": formdata.dosage,
      "nbprise": formdata.nbprise,
      "periode": formdata.periode,
      "medicamentHref": splitted[0],
      "medicamentNom":splitted[1],
      "medicamentType":splitted[2]
    });
  }

  onSaveOrdonnance() {
    let url = JSON.parse(atob(this.activatedRoute.snapshot.params.url));

    let dateInsert = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const data = {
      "dateInsert": dateInsert,
      "patient": url,
    };

    this.PatientService.saveOrdonnance(this.PatientService.hosts + '/ordonnances', data)
      .subscribe(res => {
          this.currentOrdonnance = res;
          for (let item of this.listLigneOrdonnances) {
            let ligneOrdonnance = {
              "dosage": item.dosage,
              "nbprise": item.nbprise,
              // "periode": item.periode,
              "medicament": item.medicamentHref,
              "ordonnance": this.currentOrdonnance['_links']['self']['href']
            };
            this.PatientService.saveLigneOrdonnance(this.PatientService.hosts + '/ligneOrdonnances', ligneOrdonnance)
              .subscribe(res => {
                  console.log("succss");
                }, err => {
                  console.log(err);
                }
              );
          }

          let paramUrl = this.activatedRoute.snapshot.params["url"];
          this.router.navigateByUrl("/dossier/" + paramUrl);
        },
        err => {
          console.log(err);
        }
      );
  }

}
