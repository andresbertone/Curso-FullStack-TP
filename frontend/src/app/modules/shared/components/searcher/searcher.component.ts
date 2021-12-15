import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '@app/product-service/product.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  // products: ProductModel[] = [];
  // loading: boolean = false;

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductService ) { }

  ngOnInit(): void {  
    // this.loading = true;
    // this.loadProducts();
  }

  // loadProducts() {
  //   const textSearch = this.activatedRoute.snapshot.paramMap.get('text');
  //   this.productService.searchProducts( textSearch ).subscribe(
  //     product => { 
  //       this.products = product
  //       this.loading = false;
  //     });  
  // };

}