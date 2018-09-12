import { Component, OnInit } from '@angular/core';

import { State } from '../../../shared/enums/state.enum';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public states: string[] = Object.values(State);
  public presta: Prestation = new Prestation();

  constructor() { }

  ngOnInit() { }

}