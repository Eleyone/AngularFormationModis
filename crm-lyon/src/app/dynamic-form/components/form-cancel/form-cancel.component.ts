import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-cancel',
  templateUrl: './form-cancel.component.html',
  styleUrls: ['./form-cancel.component.scss']
})
export class FormCancelComponent implements OnInit {

  config;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
