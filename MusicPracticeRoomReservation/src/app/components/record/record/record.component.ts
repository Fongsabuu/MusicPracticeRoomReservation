import { Component, OnInit } from '@angular/core';
import { Reservation_Record } from 'src/app/models/reservation_record';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  cols: any[];
  reservation_records: Array<Reservation_Record> = []

  constructor(private reservationservice: ReservationService) { }

  ngOnInit() {
    this.cols = [
      { field: 'date', header: 'วันที่' },
      { field: 'room_name', header: 'ห้องจอง' },
      { field: 'time', header: 'เวลา' },
      { field: 'hours', header: 'จำนวนชั่วโมง' },
      { field: 'totalprice', header: 'ราคารวม' },
      { field: 'user_name', header: 'ผู้จอง' },
      { field: 'reserve_status', header: 'สถานะ' }
    ];
    if(localStorage.getItem('role') == "a"){
      this.reservationservice.getAllReservation().subscribe((res : any) => {
        this.reservation_records = res;
        console.log(this.reservation_records);
      })
    }else{
      this.reservationservice.getReservationByUserId(+localStorage.getItem("auth")).subscribe((res : any) => {
        this.reservation_records = res;
        console.log(this.reservation_records);
      })
    }
  }


}
