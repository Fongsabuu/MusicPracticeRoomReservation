import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { User } from "../../models/user";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  
  defualtGender = "Male"
  model: NgbDateStruct;
  today = this.calendar.getToday();
  user : User;

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
  }
  
  onSubmit() {
    console.log(this.registerForm);
    console.log(this.user);
    this.user = this.registerForm.value;
    console.log(this.user);
    // this.registerForm.resetForm();
  }
}
