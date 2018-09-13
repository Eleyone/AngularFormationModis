// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData, CurrencyPipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// External Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { UserInterfacesModule } from './user-interfaces/user-interfaces.module';

// App module component
import { AppComponent } from './app.component';

import { config } from 'src/environments/environment.firebase';

console.log(config);

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFirestoreModule,
    LoginModule,
    AppRoutingModule,
    PageNotFoundModule,
    UserInterfacesModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
