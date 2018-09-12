import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public edit(newPresta: Prestation) {
    console.log(newPresta);
  }

}
