import { ProductService } from './../../services/product.service';
import { ProductModel } from './../../models/product-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!: ProductModel;
  loading: boolean = false;

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductService ) {}
              
  ngOnInit(): void {
    this.loading = true;
    this.loadProduct();
  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('idProduct');
    this.productService.getProduct(id).subscribe(
      prod => {
        this.product = prod;
        this.loading = false;
      });
  };

}
