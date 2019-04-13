import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../../models/user";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  userlogin : User;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginForm);
    this.userlogin = this.loginForm.value;
    console.log(this.userlogin);
  }

}
