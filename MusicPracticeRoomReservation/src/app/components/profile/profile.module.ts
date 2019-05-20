import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';

@NgModule({
  declarations: [EditProfileComponent, ManageProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
