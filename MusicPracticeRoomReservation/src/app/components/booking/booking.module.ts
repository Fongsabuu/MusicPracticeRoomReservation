import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

//ngx-gallery
import { NgxGalleryModule } from 'ngx-gallery';
//ngb
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


import { BookingRoutingModule } from './booking-routing.module';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

@NgModule({
  declarations: [BookingListComponent, BookingDetailComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    NgxGalleryModule,
    NgbModule
  ]
})
export class BookingModule { }
