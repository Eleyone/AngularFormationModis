import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrestationRoutingModule } from './prestation-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { FormComponent } from './components/form/form.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { FormReactivComponent } from './components/form-reactiv/form-reactiv.component';
import { ResolverPrestationService } from './services/resolver-prestation.service';
import { FormDynamicComponent } from './components/form-dynamic/form-dynamic.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule
  ],
  declarations: [
    ListPrestationComponent,
    PrestationComponent,
    AddPrestationComponent,
    EditPrestationComponent,
    FormComponent,
    FormReactivComponent,
    FormDynamicComponent
  ],
  providers: [ResolverPrestationService],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PrestationModule { }
