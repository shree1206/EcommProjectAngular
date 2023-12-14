import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerRoutingModule } from './seller-auth-routing.module';
import { SellerAuthComponent } from './seller-auth.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SellerAuthComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    ReactiveFormsModule
  ]
})
export class SellerAuthModule {
  constructor(){
    console.log('loaded')
  }
 }
