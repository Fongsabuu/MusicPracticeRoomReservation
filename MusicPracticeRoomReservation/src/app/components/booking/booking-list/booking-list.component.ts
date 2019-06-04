import { Component, OnInit } from '@angular/core';
import { Roomtype } from "../../../models/roomtype";
import { Room } from "../../../models/room";
import { Router } from "@angular/router";
import { RoomService } from 'src/app/services/room/room.service';



@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  // วิธีเรียกอ้างถึง child component
  // @ViewChild(BookingDetailComponent)
  // private bookingDetailComponent: BookingDetailComponent;

  rooms : Array<Room>
  banner_room : Array<string> =[]


  select_room: Room
  select_bannerroom : string
  back: boolean;

  // ngx-datepicker => set date,min,max
  bsValue = new Date();
  minDate: Date;
  maxDate: Date;

  constructor(private router: Router, private roomservice: RoomService) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 100);
  }

  ngOnInit() {
    this.roomservice.getAllRoom().subscribe((res : any) =>{
      res.forEach(res => {
        this.roomservice.getImgName(res.id, "b").subscribe((imgname_res : any) => {
          this.banner_room.push('http://localhost:8081/room/img/' + imgname_res[0].name_img)
        })
        // setTimeout(() => {
          
        // }, 1000);
      });
      this.rooms = res;
    });
    this.back = true;
    this.onValueChange(this.bsValue);
  }

  onSelectRoom(room: Room, banner : string) {
    this.select_room = room;
    this.select_bannerroom = banner;
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
