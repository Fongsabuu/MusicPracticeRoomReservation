import { Component, OnInit, ViewChild } from '@angular/core';
import { Roomtype } from "../../../models/roomtype";
import { Room } from "../../../models/room";
import { Router } from "@angular/router";

import { TestService } from "../../../services/test.service";
import { BookingDetailComponent } from "../booking-detail/booking-detail.component";

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

  constructor(private router : Router, private test : TestService) { }

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
  }
  onSelectRoomType(room_type : Roomtype){
    this.test.getSelectRoom(room_type.room_type).subscribe((result : Room) => this.selectroom = result)
    console.log(this.selectroom);
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
    console.log(this.back);
    
  }
}
