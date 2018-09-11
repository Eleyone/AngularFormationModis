import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestationRoutingModule } from './prestation-routing.module';

import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';

@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule
  ],
  declarations: [ListPrestationComponent]
})
export class PrestationModule { }
