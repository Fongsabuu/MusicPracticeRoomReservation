import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { RecordComponent } from './record/record.component';

//primeNG
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [RecordComponent],
  imports: [
    CommonModule,
    RecordRoutingModule,
    TableModule
  ]
})
export class RecordModule { }
