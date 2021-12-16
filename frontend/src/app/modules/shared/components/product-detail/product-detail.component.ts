import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductModel } from '@app/models/product-model';
import { ProductService } from '@app/product-service/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: ProductModel;
  loading: boolean = false;

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductService ) {}
              
  ngOnInit(): void {
    this.loading = true;
    this.loadProduct();
  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('idProduct');
    if (id) {
      this.productService.getProduct(id).subscribe(
        (product) => {
          this.product = product;
          this.loading = false;
        });
    }
  };

}
