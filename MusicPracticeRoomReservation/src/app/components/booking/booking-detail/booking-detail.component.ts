import { Component, OnInit, Input } from '@angular/core';
import { Roomtype } from "../../../models/roomtype";

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  @Input() roomtype: Roomtype;
  constructor() { }

  ngOnInit() {
  }

}
