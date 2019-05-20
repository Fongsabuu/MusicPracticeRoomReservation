import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  items: MenuItem[];
  activeIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'รอชำระเงิน'},
      {label: 'รอตรวจสอบ'},
      {label: 'เสร็จสมบูรณ์'}
  ];
  }

  testActiveindex(){
    this.activeIndex++;
  }
}
