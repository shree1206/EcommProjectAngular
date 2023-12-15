import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerHomeComponent } from './seller-home.component';
import { sellerAuthGuardService } from 'src/app/guard/seller-auth.guard';

const routes: Routes = [
  { path: '', component: SellerHomeComponent, canActivate: [sellerAuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerHomeRoutingModule { }
