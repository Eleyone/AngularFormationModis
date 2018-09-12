import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';

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
    this.prestationService.update(this.presta, state);
  }
}
