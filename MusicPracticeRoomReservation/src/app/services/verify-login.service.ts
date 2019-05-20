import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyLoginService {

  private lsSource = new BehaviorSubject(new String);
  login_status = this.lsSource.asObservable();

  constructor() {   
    this.lsChange('N');
    console.log('VerifyLoginService constructor');   
  }

  checkLogin(login: any) {
    if (login.email == 'member' && login.password == 'mem1234') {
      this.lsChange('M');
      return true;
    }else if (login.email == 'admin' && login.password == 'ad1234'){
      this.lsChange('A');
      return true;
    }
    else{
      this.lsChange('N');
      return false;
    }
  }

  lsChange(s) {
    this.lsSource.next(s);
  }
}
