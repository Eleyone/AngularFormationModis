import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {

  public presta: Prestation = new Prestation();

  constructor(
    private prestationService: PrestationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data.prestation);
      if (data.prestation) {
        this.presta = new Prestation(data.prestation);
      }
    });
  }

  public edit(newPresta: Prestation) {
    this.prestationService.update(newPresta).then(() => {
      this.router.navigate(['prestations']);
    });
  }

  public cancel(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
