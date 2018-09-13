import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TableComponent } from './components/table/table.component';

import { TotalPipe } from './pipes/total.pipe';
import { LocalCurrencyPipe } from './pipes/local-currency.pipe';

import { StateDirective } from './directives/state.directive';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TableComponent, TotalPipe, LocalCurrencyPipe, StateDirective, ModalComponent],
  exports: [TableComponent, TotalPipe, LocalCurrencyPipe, StateDirective, ModalComponent]
})
export class SharedModule { }
