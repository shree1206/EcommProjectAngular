import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { signupUser } from 'src/app/types/signupUser.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private _http: HttpClient, private _route:Router) { }


  APP_Base_URL = environment.apiServer;

  userSignup(data: signupUser) {
    let result = this._http.post(this.APP_Base_URL + 'posts', data, { observe: 'response' });
    return result;
  }

  setValue(value: boolean) {
    this.isLoggedIn.next(value);
  }

  getValue() {
    return this.isLoggedIn.asObservable();
  }

  checkLoogedInUser(){
    if(localStorage.getItem('seller')){
      this.isLoggedIn.next(true);
      this._route.navigate(['seller-home']);
    }
  }
}
