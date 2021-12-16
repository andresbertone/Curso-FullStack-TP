import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  exports: [AddProductComponent]
})
export class ProductModule { }
