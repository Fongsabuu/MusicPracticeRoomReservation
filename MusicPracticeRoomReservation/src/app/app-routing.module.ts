import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path : 'home' , 
    loadChildren: './components/home/home.module#HomeModule'
  },
  {
    path : 'signup' , 
    loadChildren: './components/signup/signup.module#SignupModule'
  },
  {
    path : 'login' , 
    loadChildren: './components/login/login.module#LoginModule'
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}