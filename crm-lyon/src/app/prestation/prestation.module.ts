import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestationRoutingModule } from './prestation-routing.module';

import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule
  ],
  declarations: [ListPrestationComponent, PrestationComponent]
})
export class PrestationModule { }