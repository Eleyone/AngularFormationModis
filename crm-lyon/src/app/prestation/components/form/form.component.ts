import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { State } from '../../../shared/enums/state.enum';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public states: string[] = Object.values(State);

  @Input() presta: Prestation;

  @Output() newPresta: EventEmitter<Prestation> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public process(): void {
    this.newPresta.emit(this.presta);
  }

}
