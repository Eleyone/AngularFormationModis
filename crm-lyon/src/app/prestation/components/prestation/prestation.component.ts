import { Component, OnInit, Input } from '@angular/core';

import { PrestationService } from '../../services/prestation.service';

import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {

  @Input() presta: Prestation;
  public states = Object.values(State);

  constructor(
    private prestationService: PrestationService
  ) {}

  ngOnInit() {}

  public updateState(e): void {
    const state = e.target.value;
    this.prestationService.updateState(this.presta, state).then(() => {
      this.presta.state = state;
    });
  }

  public deletePresta(e): void {
    const prestaId = e.target.value;
    this.prestationService.delete(prestaId).then((data) => {
      this.prestationService.message$.next('Trust me, I\'m enginer.');
    });
  }
}
