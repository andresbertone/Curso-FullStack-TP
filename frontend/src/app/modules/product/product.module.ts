import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

import { ProductService } from 'src/app/shared/services/product/product.service';
@NgModule({
  declarations: [
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  exports: [
    AddProductComponent,
    EditProductComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
