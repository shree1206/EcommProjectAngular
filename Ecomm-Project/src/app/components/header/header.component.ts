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
  ngOnInit(): void {
    this._route.events.subscribe((res: any) => {
      if (res.url) {
        if (localStorage.getItem('seller') && res.url.includes('seller')) {
          console.log('in seller area');
          this.menuType = 'seller';
        } else {
          this.menuType = 'default';
          console.log('outside seller');
        }
      }
    })
  }
}
