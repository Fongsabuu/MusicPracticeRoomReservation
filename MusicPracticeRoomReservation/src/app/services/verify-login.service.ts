import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyLoginService {

  private lsSource = new BehaviorSubject(new Boolean);
  login_status = this.lsSource.asObservable();

  constructor() {   
    this.lsChange(false);
  }

  checkLogin(login: any) {
    if (login.email == 'member' && login.password == '1234') {
      this.lsChange(true);
      return true;
    }else{
      this.lsChange(false);
      return false;
    }
  }

  lsChange(s) {
    this.lsSource.next(s);
  }
}
