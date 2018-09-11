import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginRoutingModule { }
