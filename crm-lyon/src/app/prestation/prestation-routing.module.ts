import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';

const prestationRoutes: Routes = [
  { path: '', component: ListPrestationComponent },
  { path: 'add', component: AddPrestationComponent},
  { path: 'edit', component: EditPrestationComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(prestationRoutes)
  ]
})
export class PrestationRoutingModule { }
