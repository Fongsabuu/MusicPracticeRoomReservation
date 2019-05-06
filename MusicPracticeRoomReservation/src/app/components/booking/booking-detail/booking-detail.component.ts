import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
//models
import { Room } from "../../../models/room";
import { MockTimeSchedule } from "../../../mockdata/mock-timeschedule";
import { Time } from "../../../models/time";
//services
import { RoomService } from "../../../services/room.service";
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  @Input() room: Room;
  @Input() back: boolean;
  @Input() dateselect: string;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  timeschedule: any = MockTimeSchedule;
  test : Array<Time> = [];

  constructor(private rs: RoomService) { }

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
    this.test = []
    if (this.room) {
      console.log(`OnChanges work..`);
      this.rs.geTimescheduleRoom(this.dateselect).subscribe(result => {
        result.forEach(date => {
          if (this.dateselect == date.date)
            if (date.roomNO.substr(0, 1) == this.room.room_type) {
              this.test.push(date)
            }
        })
      })
      console.log(this.test);   
    }
  }
}
