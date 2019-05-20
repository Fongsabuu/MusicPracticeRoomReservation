import { Component, OnInit } from '@angular/core';
import { MockRecord } from "../../../mockdata/mock-record";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  cols: any[];
  records = MockRecord;

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'date', header: 'วันที่' },
      { field: 'roomNO', header: 'ห้องจอง' },
      { field: 'time', header: 'เวลา' },
      { field: 'hours', header: 'จำนวนชั่วโมง' },
      { field: 'price', header: 'ราคารวม' },
      { field: 'user', header: 'ผู้จอง' },
      { field: 'booked_status', header: 'สถานะ' }
  ];
  }


}
