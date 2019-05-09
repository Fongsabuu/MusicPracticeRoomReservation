import { Component, OnInit } from '@angular/core';
import { Roomtype } from "../../../models/roomtype";
import { Room } from "../../../models/room";
import { Router } from "@angular/router";

import { RoomService } from "../../../services/room.service";


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  // วิธีเรียกอ้างถึง child component
  // @ViewChild(BookingDetailComponent)
  // private bookingDetailComponent: BookingDetailComponent;

  booking_type: Roomtype[]
  selectroom: Room
  back: boolean;

  // ngx-datepicker => set date,min,max
  bsValue = new Date();
  minDate: Date;
  maxDate: Date;

  constructor(private router: Router, private roomservice: RoomService) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 365);
    this.maxDate.setDate(this.maxDate.getDate() + 365);
  }

  ngOnInit() {
    this.booking_type = [
      {
        imgurl: '../../../../assets/web-images/1L.jpg',
        title: 'ห้องขนาดใหญ่ (Size L)',
        detail: 'ราคา ...',
        room_type: 'L'
      },
      {
        imgurl: '../../../../assets/web-images/1M.jpg',
        title: 'ห้องขนาดกลาง (Size M)',
        detail: 'ราคา ...',
        room_type: 'M'
      },
      {
        imgurl: '../../../../assets/web-images/2s.jpg',
        title: 'ห้องขนาดเล็ก (Size S)',
        detail: 'ราคา ...',
        room_type: 'S'
      },
    ]
    this.back = true;
    this.onValueChange(this.bsValue);
  }

  onSelectRoomType(room_type: Roomtype) {
    this.roomservice.getSelectRoom(room_type.room_type).subscribe((result: Room) => this.selectroom = result)
    this.back = false;
  }

  btnBack() {
    if (this.back) {
      this.back = false
      this.router.navigate(['/home'])
    } else {
      this.bsValue = new Date();
      this.back = true
    }
  }
  
  onValueChange(value: Date): void {
    this.bsValue = value;
  }

}
