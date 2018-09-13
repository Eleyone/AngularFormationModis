import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Prestation } from '../../../shared/models/prestation';

import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-form-reactiv',
  templateUrl: './form-reactiv.component.html',
  styleUrls: ['./form-reactiv.component.scss']
})
export class FormReactivComponent implements OnInit {

  public prestaForm: FormGroup;
  public states: string[] = Object.values(State);

  @Input() presta: Prestation;
  @Output() newPresta: EventEmitter<Prestation> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.prestaForm = this.formBuilder.group({
      typePresta : [this.presta.typePresta],
      client : [this.presta.client],
      nbJours : [this.presta.nbJours],
      tjmHt : [this.presta.tjmHt],
      tauxTva: [this.presta.tauxTva],
      state: [this.presta.state],
      id: [this.presta.id]
    });
  }

  public process(): void {
    this.newPresta.emit(new Prestation(this.prestaForm.value));
  }
}
