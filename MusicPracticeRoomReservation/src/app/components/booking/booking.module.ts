import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ngx-gallery
import { NgxGalleryModule } from 'ngx-gallery';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

@NgModule({
  declarations: [BookingListComponent, BookingDetailComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    NgxGalleryModule
  ]
})
export class BookingModule { }
