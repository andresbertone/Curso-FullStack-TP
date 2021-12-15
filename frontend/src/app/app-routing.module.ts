import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';

// import { LoginComponent } from './components/login/login.component';
// import { ContactComponent } from './components/contact/contact.component';
// import { ProductsComponent } from './components/products/products.component';
// import { SearcherComponent } from './components/searcher/searcher.component';
// import { ProductDetailComponent } from './components/product-detail/product-detail.component';
// import { AddProductComponent } from './components/add-product/add-product.component';

import { ProductsComponent } from './modules/shared/components/products/products.component';
import { ProductDetailComponent } from './modules/shared/components/product-detail/product-detail.component';
import { SearcherComponent } from './modules/shared/components/searcher/searcher.component';
import { ContactComponent } from './modules/shared/components/contact/contact.component';

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
    loadChildren: () => import('./modules/add-product/add-product.module').then( (module) => module.AddProductModule )
  },
  {
    path: 'product/:idProduct',
    component: ProductDetailComponent
  },
  {
    path: 'search/:text',
    component: SearcherComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
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
