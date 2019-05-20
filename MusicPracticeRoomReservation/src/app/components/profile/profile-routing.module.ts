import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';

const routes: Routes = [
  { path : 'editprofile', component : EditProfileComponent},
  { path : 'manageprofile', component : ManageProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
