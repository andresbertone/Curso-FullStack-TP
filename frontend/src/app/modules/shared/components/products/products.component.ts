import { Component, OnInit } from '@angular/core';

import { ProductModel } from '@app/models/product-model';
import { ProductService } from '@app/product-service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];
  loading: boolean = false;
  productFinding: string = '';

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.loading = false;
      });
  };

}
