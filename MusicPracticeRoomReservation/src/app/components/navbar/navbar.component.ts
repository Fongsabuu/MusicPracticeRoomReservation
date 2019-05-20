import { Component, OnInit } from '@angular/core';
import { VerifyLoginService } from 'src/app/services/verify-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginstatus: string;

  constructor(private vl: VerifyLoginService) {}

  ngOnInit() {
    this.vl.login_status.subscribe(s => {
      console.log(s);
      this.loginstatus = <string>s;
    })
  }

  logOut(){
    this.vl.checkLogin('');
  }
}
