import { ProductModel } from './../../models/product-model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];
  loading: boolean = false;

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
