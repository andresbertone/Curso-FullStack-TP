import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SearchFieldComponent } from './components/search-field/search-field.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

import { ProductService } from '@app/product-service/product.service';
import { SupplierService } from '@app/supplier-service/supplier.service';

import { SearchFilterPipe } from '../../shared/pipes/search-filter.pipe';

@NgModule({
  declarations: [
    ProductCardComponent,
    ContactComponent,
    NavComponent,
    ProductDetailComponent,
    ProductsComponent,
    SearchFieldComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ProductCardComponent,
    ContactComponent,
    NavComponent,
    ProductDetailComponent,
    ProductsComponent,
    SearchFieldComponent,
    SearchFilterPipe
  ],
  providers: [ProductService, SupplierService]
})
export class SharedModule { }