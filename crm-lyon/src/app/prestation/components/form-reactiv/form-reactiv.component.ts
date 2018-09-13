import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      typePresta: [this.presta.typePresta, Validators.compose([
        Validators.required, Validators.minLength(4)
      ])],
      client: [this.presta.client, Validators.compose([
        Validators.required, Validators.minLength(4)
      ])],
      nbJours: [this.presta.nbJours, Validators.compose([
        Validators.required, Validators.minLength(1)
      ])],
      tjmHt: [this.presta.tjmHt, Validators.compose([
        Validators.required, Validators.minLength(1)
      ])],
      tauxTva: [this.presta.tauxTva, Validators.compose([
        Validators.required, Validators.minLength(1)
      ])],
      state: [this.presta.state, Validators.compose([
        Validators.required
      ])],
      id: [this.presta.id]
    });
  }

  public process(): void {
    this.newPresta.emit(new Prestation(this.prestaForm.value));
  }

  public isError(fieldId: string): boolean {
    const field = this.prestaForm.get(fieldId);
    return (field.invalid && field.touched);
  }
}
