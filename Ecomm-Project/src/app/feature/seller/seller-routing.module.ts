import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { sellerAuthGuardService } from 'src/app/guard/seller-auth.guard';
import { SellerComponent } from './seller.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';


const routes: Routes = [
  {
    path: '', component: SellerComponent, children: [
      { path: '', component: SellerAuthComponent },
      { path: 'seller-add-product', component: SellerAddProductComponent, canActivate: [sellerAuthGuardService] },
      { path: 'seller-home', component: SellerHomeComponent,  canActivate: [sellerAuthGuardService] },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
