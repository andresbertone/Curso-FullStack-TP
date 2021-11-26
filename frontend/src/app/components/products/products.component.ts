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

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {

    this.getProducts();

  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

}
