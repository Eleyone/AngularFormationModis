import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'prestations',
    loadChildren: './prestation/prestation.module#PrestationModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing : (!environment.production),
      }
    )
  ]
})
export class AppRoutingModule { }
