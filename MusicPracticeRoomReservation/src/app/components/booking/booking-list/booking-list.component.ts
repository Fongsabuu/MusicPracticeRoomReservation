import { Component, OnInit } from '@angular/core';
import { Roomtype } from "../../../models/roomtype";
import { Router } from "@angular/router";

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  booking_type : Roomtype[]
  selectroomtype : Roomtype
  test : boolean;
  back : boolean;

  constructor(private router : Router) { }

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
    this.test = true;
    this.back = true;
  }
  onSelectRoomType(room_type : Roomtype){
    this.selectroomtype = room_type;
    this.back = false;
  } 
  btnBack(){
    if(this.back){
      this.router.navigate(['/home'])
    }else{
      this.back = true
    }
    console.log(this.back);
    
  }
}
