import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerAddProductRoutingModule } from './seller-add-product-routing.module';
import { SellerAddProductComponent } from './seller-add-product.component';


@NgModule({
  declarations: [
  
    SellerAddProductComponent
  ],
  imports: [
    CommonModule,
    SellerAddProductRoutingModule
  ]
})
export class SellerAddProductModule { }
