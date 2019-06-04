import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageroomRoutingModule } from './manageroom-routing.module';
import { ListRoomComponent } from './list-room/list-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListRoomComponent, EditRoomComponent],
  imports: [
    CommonModule,
    ManageroomRoutingModule,
    FormsModule
  ]
})
export class ManageroomModule { }
