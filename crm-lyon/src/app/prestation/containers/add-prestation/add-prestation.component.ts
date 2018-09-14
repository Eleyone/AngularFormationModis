import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  public presta: Prestation = new Prestation();

  constructor(
    private prestationService: PrestationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.router, this.activatedRoute);
  }

  public add(newPresta: Prestation) {
    this.prestationService.add(newPresta).then(() => {
      this.router.navigate(['prestations']);
    });
  }

  public cancel(): void {
    this.router.navigate(['prestations']);
  }
}
