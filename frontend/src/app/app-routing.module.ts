import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from '@app/components/products/products.component';
import { ProductDetailComponent } from '@app/components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( (module) => module.HomeModule )
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then( (module) => module.AuthModule )
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/product/product.module').then( (module) => module.ProductModule )
  },
  {
    path: 'product/:idProduct',
    component: ProductDetailComponent
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then( (module) => module.ContactModule )
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
