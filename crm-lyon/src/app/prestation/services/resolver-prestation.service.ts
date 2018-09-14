import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { PrestationService } from './prestation.service';

import { Prestation } from '../../shared/models/prestation';

@Injectable({
  providedIn: 'root'
})
export class ResolverPrestationService implements Resolve<Prestation> {

  constructor(private prestaService: PrestationService, private router: Router) { }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Prestation>|Promise<Prestation>|any {
    return this.prestaService.get(route.params.id).pipe(
      take(1),
      map((presta) => {
        if (presta) {
          return presta;
        } else { // id not found
          this.router.navigate(['prestations']);
          return false;
        }
      })
    );
  }
}
