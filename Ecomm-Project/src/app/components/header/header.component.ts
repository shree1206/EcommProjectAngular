import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _route: Router) { }
  menuType: string = 'default';
  sellerName: string = '';
  ngOnInit(): void {
    this._route.events.subscribe((res: any) => {
      if (res.url) {
        if (localStorage.getItem('seller') && res.url.includes('seller')) {
          let localStrore = localStorage.getItem('seller');
          let sellerData = localStrore && JSON.parse(localStrore);
          this.sellerName = sellerData.fname;
          this.menuType = 'seller';
        } else {
          this.menuType = 'default';
        }
      }
    })
  }
}
