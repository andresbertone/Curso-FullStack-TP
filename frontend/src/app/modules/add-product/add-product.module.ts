import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';


@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AddProductRoutingModule
  ]
})
export class AddProductModule { }
