import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
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
    path : 'reserveroom' , 
    loadChildren: './components/booking/booking.module#BookingModule'
  },
  {
    path : 'reservation' , 
    loadChildren: './components/reservation/reservation.module#ReservationModule'
  },
  {
    path : 'record' , 
    loadChildren: './components/record/record.module#RecordModule'
  },
  {
    path : 'profile' , 
    loadChildren: './components/profile/profile.module#ProfileModule'
  },
  {
    path : 'manageroom' , 
    loadChildren: './components/manageroom/manageroom.module#ManageroomModule'
  },
  { path: '**', 
    redirectTo : 'home',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}