import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNoFoundRoutingModule } from './page-no-found-routing.module';

import { PageNotFoundComponent } from './containers/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    PageNoFoundRoutingModule
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
