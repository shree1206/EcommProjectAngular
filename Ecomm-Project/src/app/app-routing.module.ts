import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'seller-auth', loadChildren: () => import('./feature/seller-auth/seller-auth.module').then(m => m.SellerAuthModule)
  },
  {
    path: 'seller-home', loadChildren: () => import('./feature/seller-home/seller-home.module').then(m => m.SellerHomeModule)
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'page-not-found', component: PageNotFoundComponent
  },
  {
    path: '**', redirectTo: 'page-not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
