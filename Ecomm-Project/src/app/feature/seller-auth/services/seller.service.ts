import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { signupUser } from 'src/app/types/signupUser.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private myBehaviorSubject = new BehaviorSubject<boolean>(false);
  constructor(private _http: HttpClient) { }


  APP_Base_URL = environment.apiServer;

  userSignup(data: signupUser) {
    let result = this._http.post(this.APP_Base_URL + 'posts', data, { observe: 'response' });
    return result;
  }

  setValue(value: boolean) {
    this.myBehaviorSubject.next(value);
  }

  getValue() {
    return this.myBehaviorSubject.asObservable();
  }
}
