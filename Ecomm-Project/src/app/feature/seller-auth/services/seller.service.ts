import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginUser, signupUser } from 'src/app/types/signupUser.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private _http: HttpClient, private _route: Router, private _toastr: ToastrService) { }

  isLoggedInError = new EventEmitter(false);

  APP_Base_URL = environment.apiServer;

  userSignup(data: signupUser): Observable<any> {
    let result = this._http.post(this.APP_Base_URL + 'posts', data, { observe: 'response' });
    return result;
  }

  setValue(value: boolean) {
    this.isLoggedIn.next(value);
  }

  getValue() {
    return this.isLoggedIn.asObservable();
  }

  checkLoogedInUser() {
    if (localStorage.getItem('seller')) {
      this.isLoggedIn.next(true);
      this._route.navigate(['seller-home']);
    }
  }

  userLogin(data: LoginUser) {
    this._http.get(`${this.APP_Base_URL}posts?email=${data.email}&password=${data.password}`, { observe: 'response' }).subscribe((res: any) => {
      if (res && res.body && res.body.length) {
        this.setValue(true);
        this._toastr.success('Successfull Event Done', 'Success');
        Swal.fire('Successfully LoggedIn')
        localStorage.setItem('seller', JSON.stringify(res.body));
        this._route.navigate(['seller-home']);
        this.isLoggedInError.emit(true);
      } else {
        this.isLoggedInError.emit(false);
      }
    });
  }

  userLogout(){
    localStorage.removeItem('seller');
    this._toastr.success('Successfull Logout', 'Success');
    Swal.fire('Successfully Logged Out');
    this._route.navigate(['/']);
  }
}
