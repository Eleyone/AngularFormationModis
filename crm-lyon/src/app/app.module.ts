import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserInterfacesModule } from './user-interfaces/user-interfaces.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserInterfacesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
