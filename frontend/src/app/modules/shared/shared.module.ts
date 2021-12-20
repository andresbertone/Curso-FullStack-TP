import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SearchFieldComponent } from './components/search-field/search-field.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AlertComponent } from './components/alert/alert.component';

import { ProductService } from '@app/product-service/product.service';
import { SupplierService } from '@app/supplier-service/supplier.service';
import { SnackbarService } from '@app/snackbar-service/snackbar.service';
import { LoginService } from '@app/login-service/login.service';

@NgModule({
  declarations: [
    ProductCardComponent,
    NavComponent,
    ProductDetailComponent,
    ProductsComponent,
    SearchFieldComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ProductCardComponent,
    NavComponent,
    ProductDetailComponent,
    ProductsComponent,
    SearchFieldComponent,
    AlertComponent
  ],
  providers: [
    ProductService, 
    SupplierService,
    SnackbarService,
    LoginService
  ]
})
export class SharedModule { }
