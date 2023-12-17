import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/feature/seller/services/seller.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private _seller: SellerService, private _route: Router) { }
  ngOnInit() {
    if (localStorage.getItem('seller')) {
      this._seller.userLogout();
    } else {
      this._route.navigate(['/'])
    }
  }
}
