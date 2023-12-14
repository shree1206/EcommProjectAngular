import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { signupUser } from 'src/app/types/signupUser.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private _http: HttpClient) { }

  APP_Base_URL = environment.apiServer;

  userSignup(data: signupUser): Observable<any> {
    return this._http.post(this.APP_Base_URL + 'posts', data);
  }
}
