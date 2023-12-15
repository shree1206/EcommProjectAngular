import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller-auth/services/seller.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  isloggedIn: any;
  constructor(private _seller: SellerService) { }

  ngOnInit() { }
}
