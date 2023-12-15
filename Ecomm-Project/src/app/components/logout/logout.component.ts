import { Component } from '@angular/core';
import { SellerService } from 'src/app/feature/seller-auth/services/seller.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private _seller: SellerService) { }
  ngOnInit() {
    if (localStorage.getItem('seller')) {
      this._seller.userLogout();
    }
  }
}
