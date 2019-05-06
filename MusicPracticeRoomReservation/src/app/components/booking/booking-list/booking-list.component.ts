import { Component, OnInit, ViewChild } from '@angular/core';
import { Roomtype } from "../../../models/roomtype";
import { Room } from "../../../models/room";
import { Router } from "@angular/router";

import { RoomService } from "../../../services/room.service";
import { BookingDetailComponent } from "../booking-detail/booking-detail.component";
import { NgbDate, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  @ViewChild(BookingDetailComponent)
  private bookingDetailComponent: BookingDetailComponent;
  booking_type : Roomtype[]
  selectroom : Room
  back : boolean;
  date: NgbDateStruct;
  dateselect : string;

  constructor(private router : Router, private roomservice : RoomService, private calendar: NgbCalendar) { }

  ngOnInit() {
    this.booking_type = [
      {
        imgurl : '../../../../assets/web-images/1L.jpg',
        title : 'ห้องขนาดใหญ่ (Size L)',
        detail : 'ราคา ...',
        room_type : 'L'
      },
      {
        imgurl : '../../../../assets/web-images/1M.jpg',
        title : 'ห้องขนาดกลาง (Size M)',
        detail : 'ราคา ...',
        room_type : 'M'
      },
      {
        imgurl : '../../../../assets/web-images/2s.jpg',
        title : 'ห้องขนาดเล็ก (Size S)',
        detail : 'ราคา ...',
        room_type : 'S'
      },
    ]
    this.back = true;
    this.date = this.calendar.getToday();
    this.onDateSelect(this.date);
  }
  onSelectRoomType(room_type : Roomtype){
    this.roomservice.getSelectRoom(room_type.room_type).subscribe((result : Room) => this.selectroom = result)
    this.back = false;
  } 
  btnBack(){
    if(this.back){
      this.back = false
      this.router.navigate(['/home'])
    }else{
      this.back = true
      // this.bookingDetailComponent.room = null
    }
    this.date = this.calendar.getToday();
    this.onDateSelect(this.date);
    console.log(this.back);
  }
  onDateSelect(date : any){
    // console.log(date.day+"/"+date.month+"/"+date.year);
    this.dateselect = date.day+"/"+date.month+"/"+date.year;
  }
}
