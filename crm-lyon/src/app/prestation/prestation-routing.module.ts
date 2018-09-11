import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';

const prestationRoutes: Routes = [
  { path: '', component: ListPrestationComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(prestationRoutes)
  ]
})
export class PrestationRoutingModule { }
