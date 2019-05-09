import { Component, OnInit, Input, SimpleChanges, TemplateRef, HostListener } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
// models
import { Room } from "../../../models/room";
import { MockTimeSchedule } from "../../../mockdata/mock-timeschedule";
import { Time } from "../../../models/time";

// services
import { RoomService } from "../../../services/room.service";

// ngx-modal
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})

export class BookingDetailComponent implements OnInit {
  @Input() room: Room;
  @Input() back: boolean;
  @Input() bsValue: Date;
  // ngx-gellery
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  defualtRoom = "Room1";
  defualtHours = "1 ชม."
  timeschedule: any = MockTimeSchedule;
  datebooked: Array<Time> = [];
  dateselect: string;
  mytime: Date;
  minTime: Date;
  maxTime: Date;

  //check booked
  timeselect: number;
  roomselect: any;
  hoursselect: number;
  bookedDetail: boolean = false;
  totaltime: string;
  totalprice: any;
  test: any[];
  eiei: Array<any> = [];
  //ngx-modal
  modalRef: BsModalRef;

  constructor(private rs: RoomService, private modalService: BsModalService) {
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   console.log(event.target.innerWidth);
  // }

  ngOnInit() {

    this.galleryOptions = [
      {
        width: "100%", height: "500px", imagePercent: 80, thumbnailsPercent: 20,
        imageArrowsAutoHide: true, thumbnailsArrowsAutoHide: true,
        previewCloseOnClick: true, previewCloseOnEsc: true
      },
      { breakpoint: 500, width: "100%", height: "500px", thumbnailsColumns: 3, previewSwipe: true, previewCloseOnClick: true }
    ];

    this.galleryImages = [
      {
        small: '../../../../assets/testgallery/3L.jpg',
        medium: '../../../../assets/testgallery/3L.jpg',
        big: '../../../../assets/testgallery/3L.jpg'
      },
      {
        small: '../../../../assets/testgallery/guitar.jpg',
        medium: '../../../../assets/testgallery/guitar.jpg',
        big: '../../../../assets/testgallery/guitar.jpg'
      },
      {
        small: '../../../../assets/testgallery/guitarE.jpg',
        medium: '../../../../assets/testgallery/guitarE.jpg',
        big: '../../../../assets/testgallery/guitarE.jpg'
      },
      {
        small: '../../../../assets/testgallery/bass.jpg',
        medium: '../../../../assets/testgallery/bass.jpg',
        big: '../../../../assets/testgallery/bass.jpg'
      },
      {
        small: '../../../../assets/testgallery/dump.jpg',
        medium: '../../../../assets/testgallery/dump.jpg',
        big: '../../../../assets/testgallery/dump.jpg'
      },
    ];
  }

  ngOnChanges(changes: SimpleChanges) {

    this.datebooked = []
    if (this.room) {
      // เซ็ตเวลาให้ล็อคไว้เริ่มต้นที่ 12.30 
      this.mytime = new Date(this.bsValue);
      this.maxTime = new Date(this.bsValue);
      this.minTime = new Date(this.bsValue);
      this.mytime.setHours(12);
      this.mytime.setMinutes(30);
      // set maxTime & minTime in timepciker
      this.maxTime.setHours(22);
      this.minTime.setHours(12)

      // เเปลง date เป็น string format เพื่อเอาไปค้นหา
      this.dateselect = this.parseDate(this.bsValue);

      // ค้นหาเวลาที่มีคนจองเเล้วตามวันที่เลือก ถ้ามี push ใส่ array
      this.rs.geTimescheduleRoom(this.dateselect).subscribe(result => {
        result.forEach(date => {
          if (this.dateselect == date.date)
            if (date.roomNO.substr(0, 1) == this.room.room_type) {
              this.datebooked.push(date)
            }
        })
      })
      console.log(this.datebooked);
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  parseDate(value: Date): string {
    // let dd = value.getDate() + "";
    // let mm = (value.getMonth() + 1) + "";
    // let yyyy = value.getFullYear();
    // if (value.getDate() < 10) {
    //   dd = '0' + dd;
    // }
    // if (value.getMonth() + 1 < 10) {
    //   mm = '0' + mm;
    // }
    // return dd + "/" + mm + "/" + yyyy;
    return value.getDate() + "/" + (value.getMonth() + 1) + "/" + value.getFullYear();
  }
  onTimeChange(time: any) {
    this.timeselect = time.getHours();
    this.bookedVerify();
  }

  onRoomSelect(room: any) {
    this.roomselect = room;
    this.bookedVerify();
  }

  onHoursSelect(hours: any) {
    this.hoursselect = hours;
    this.bookedVerify();
  }

  bookedVerify() {
    this.eiei = [];
    if (this.timeselect && this.roomselect && this.hoursselect) {
      this.totaltime = this.timeselect + ".30 - " + (this.timeselect + Number(this.hoursselect)) + ".30";
      this.totalprice = Number(this.room.price.substr(0, 3)) * Number(this.hoursselect);
      // for (let index = 0; index < this.hoursselect; index++) {
      //   this.eiei.push((this.timeselect+index)+".30");
      // }
      // console.log(this.eiei);
      this.test = this.totaltime.split(" ");
      if (this.datebooked.length > 0) {
        console.log("มีคนจอง");
        for (let index = 0; index < this.datebooked.length; index++) {
          if (this.datebooked[index].roomNO.substr(1) == this.roomselect) {
            // for (let ind = 0; ind < this.eiei.length; ind++) {
            //   if (this.datebooked[index].time.includes(this.eiei[ind])) { this.bookedDetail = false; break;
            //   }else { this.bookedDetail = true;}
            // }
            console.log("booked.time", this.datebooked[index].time);
            console.log(this.datebooked[index].time.includes(this.test[0]));
            console.log(this.datebooked[index].time.includes(this.test[2]));
            if (this.datebooked[index].time.includes(this.test[0])) { this.bookedDetail = false; break;}
            else if (this.datebooked[index].time.includes(this.test[2])) {this.bookedDetail = false; break;}
            else this.bookedDetail = true;
          }
        }
      } else {
        console.log("ไม่มีคนจอง");
        this.bookedDetail = true;
      }
    }
  }
}
