import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResolverPrestationService } from './services/resolver-prestation.service';

import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';

const prestationRoutes: Routes = [
  {
    path: '', component: ListPrestationComponent, children: [
      {
        path: 'add',
        component: AddPrestationComponent
      },
      {
        path: 'edit/:id',
        component: EditPrestationComponent,
        resolve: { prestation: ResolverPrestationService }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(prestationRoutes)
  ],
  exports: [RouterModule]
})
export class PrestationRoutingModule { }
