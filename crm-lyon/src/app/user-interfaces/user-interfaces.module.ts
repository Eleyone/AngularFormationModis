import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './containers/ui/ui.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [FooterComponent, UiComponent, HeaderComponent, NavComponent],
  exports: [UiComponent]
})
export class UserInterfacesModule { }
