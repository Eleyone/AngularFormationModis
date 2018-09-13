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
    const id = this.route.snapshot.paramMap.get('id');

    this.prestationService.get(id).subscribe((data) => {
      console.log(data);
      this.presta = new Prestation(data);
    });
  }

  public edit(newPresta: Prestation) {
    this.prestationService.update(newPresta).then(() => {
      this.router.navigate(['prestations']);
    });
  }

}
