import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { SellerService } from '../feature/seller-auth/services/seller.service';

@Injectable({
  providedIn: 'root'
})
export class sellerAuthGuardService {
  constructor(public _sellerService: SellerService, public router: Router) { }

  isloggedIn: boolean = false;
  canActivate(route: ActivatedRouteSnapshot): boolean {
    this._sellerService.getValue().subscribe((res) => {
      this.isloggedIn = res;
    });
    if (!this.isloggedIn) {
      this.router.navigate(['seller-auth']);
      return false;
    }
    return true;
  }
}