import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from '../../../shared/models/prestation';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit {

  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public message$: Subject<string>;
  public headers: string[];
  public button: object;

  constructor(
    private prestationService: PrestationService
  ) { }

  ngOnInit() {
    this.collection$ = this.prestationService.collection$;
    this.message$ = this.prestationService.message$;
    this.headers = ['Type', 'Client', 'Nb Jours', 'TJM HT', 'Total HT', 'Total TTC', 'Action'];
    this.button = {
      libelle: 'Ajouter Prestation',
      route: 'add'
    };
  }

}
