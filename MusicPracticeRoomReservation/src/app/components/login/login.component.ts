import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../../models/user";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { VerifyLoginService } from 'src/app/services/verify-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  userlogin : User;

  constructor(private vl : VerifyLoginService,
              private router : Router ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userlogin = this.loginForm.value;
    if(this.vl.checkLogin(this.userlogin)){
      this.router.navigate(['/home'])
    }
  }

}
