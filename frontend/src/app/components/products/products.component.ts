import { ProductModel } from './../../models/product-model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];

  constructor( 
    private productService: ProductService,
    private router: Router ) { }

  ngOnInit(): void {

    this.getProducts();

  }

  getProducts() {
    this.products = this.productService.getProducts();
  };

}
