import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormSubmitComponent } from './components/form-submit/form-submit.component';
import { FormCancelComponent } from './components/form-cancel/form-cancel.component';
import { FormHiddenComponent } from './components/form-hidden/form-hidden.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [
    DynamicFormComponent,
    FormInputComponent,
    FormSelectComponent,
    FormSubmitComponent,
    FormCancelComponent,
    FormHiddenComponent,
    DynamicFieldDirective
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormSubmitComponent,
    FormCancelComponent,
    FormHiddenComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DynamicFormModule { }
