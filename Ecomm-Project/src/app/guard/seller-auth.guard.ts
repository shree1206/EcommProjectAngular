import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { SellerService } from '../feature/seller/services/seller.service';

@Injectable({
  providedIn: 'root'
})
export class sellerAuthGuardService {
  constructor(public _sellerService: SellerService, public router: Router) { 
    console.log('Auth guard called')
  }

  isloggedIn: boolean = false;
  canActivate(route: ActivatedRouteSnapshot): boolean {
    this._sellerService.getValue().subscribe((res) => {
      this.isloggedIn = res;
    });
    if (!this.isloggedIn) {
      this.router.navigate(['/seller'])
      return false;
    }
    return true;
  }
}