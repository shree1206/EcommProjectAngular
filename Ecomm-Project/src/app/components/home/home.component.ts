import { Component } from '@angular/core';
import { SellerService } from 'src/app/feature/seller-auth/services/seller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _seller: SellerService) { }
  
  ngOnInit() {
    this._seller.checkLoogedInUser();
  }


  openGitHub() : void {
    window.open("https://github.com/shree1206/EcommProjectAngular", "_blank");
}
}
