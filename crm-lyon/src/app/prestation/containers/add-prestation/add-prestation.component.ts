import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public add(newPresta: Prestation) {
    console.log(newPresta);
  }
}
