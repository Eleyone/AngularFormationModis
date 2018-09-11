import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'prestations',
    loadChildren: './prestation/prestation.module#PrestationModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing : (!environment.production),
        preloadingStrategy: PreloadAllModules
      }
    )
  ]
})
export class AppRoutingModule { }
