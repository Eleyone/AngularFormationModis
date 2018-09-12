import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrestationRoutingModule } from './prestation-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { FormComponent } from './components/form/form.component';
import { PrestationComponent } from './components/prestation/prestation.component';

@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [ListPrestationComponent, PrestationComponent, AddPrestationComponent, EditPrestationComponent, FormComponent]
})
export class PrestationModule { }
