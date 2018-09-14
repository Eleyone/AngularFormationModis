import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss']
})
export class FormDynamicComponent implements OnInit {

  @Input() presta: Prestation;
  @Output() newPresta: EventEmitter<Prestation> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<string> = new EventEmitter();

  config = [
    {
      type: 'input',
      label: 'Type prestation',
      name: 'typePresta',
      placeholder: 'Enter prestation type',
    },
    {
      type: 'input',
      label: 'Client',
      name: 'client',
      placeholder: 'Enter client name',
    },
    {
      type: 'input',
      label: 'Nombre de jour',
      name: 'nbJours',
      placeholder: 'Enter count of day',
    },
    {
      type: 'input',
      label: 'TJM HT',
      name: 'tjmHt',
      placeholder: 'Enter the tjm',
    },
    {
      type: 'input',
      label: 'Taux TVA',
      name: 'tauxTva',
      placeholder: 'Enter TVA',
    },
    {
      type: 'hidden',
      name: 'id',
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: Object.values(State),
      placeholder: 'Select an option',
    },
    {
      type: 'submit',
      label: 'Submit',
      name: 'submit',
    },
    {
      type: 'cancel',
      label: 'Cancel',
      name: 'cancel',
    },
  ];

  constructor() {


  }

  ngOnInit() {
  }

  public process(): void {
    // this.newPresta.emit(new Prestation(this.prestaForm.value));
  }

  public cancel(): void {
    // this.cancelEvent.emit('cancel');
  }

}
