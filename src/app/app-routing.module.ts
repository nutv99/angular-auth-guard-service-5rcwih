import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth-guard.service';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  //Using Pathmatch Full mehod(for route with empty and redirectTo to equal route). this method need initial login path declaration
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  //Usig Pathmath Prefix method (default method to  search left from url upto path match). this mehtod does not need initial login path declaration
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   pathMatch: 'prefix'
  // }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutinModule {

}
