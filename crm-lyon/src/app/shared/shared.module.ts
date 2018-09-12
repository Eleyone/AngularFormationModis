import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TotalPipe } from './pipes/total.pipe';
import { LocalCurrencyPipe } from './pipes/local-currency.pipe';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, TotalPipe, LocalCurrencyPipe, StateDirective],
  exports: [TableComponent, TotalPipe, LocalCurrencyPipe, StateDirective]
})
export class SharedModule { }
