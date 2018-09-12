import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit {

  public collection: Prestation[];
  public headers: string[];
  public button: object;

  constructor(
    private prestationService: PrestationService
  ) { }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.headers = ['Type', 'Client', 'Nb Jours', 'TJM HT', 'Total HT', 'Total TTC', 'Action'];
    this.button = {
      libelle: 'Ajouter Prestation',
      route: 'add'
    };
  }

}
