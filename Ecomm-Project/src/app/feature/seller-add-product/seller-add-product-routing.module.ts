import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerAddProductComponent } from './seller-add-product.component';
import { sellerAuthGuardService } from 'src/app/guard/seller-auth.guard';

const routes: Routes = [
  { path: '', component: SellerAddProductComponent, canActivate: [sellerAuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerAddProductRoutingModule { }
