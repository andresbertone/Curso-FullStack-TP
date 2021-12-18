import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductModel } from '@app/models/product-model';
import { ProductService } from '@app/product-service/product.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: ProductModel[] = [];
  loading: boolean = false;

  subscription: Subscription = new Subscription();

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (products: ProductModel[]) => {
        this.products = products;
        this.loading = false;
      }
    );
  };

}
