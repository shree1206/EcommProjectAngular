import { Component, OnInit, isDevMode } from '@angular/core';
import { SellerService } from './feature/seller/services/seller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ecomm-Project';
  constructor(private _seller:SellerService){ }

  ngOnInit() {
    if (isDevMode()) {
    } else {
    }
  }
}
