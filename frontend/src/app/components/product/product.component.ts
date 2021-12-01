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

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductService ) {
                   
  }
              
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe( params => {
      this.product = this.productService.getProduct( params['idProduct'] );
    });
                
  }

}
