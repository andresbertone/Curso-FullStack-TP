import { ProductModel } from '../../models/product-model';
import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  products: ProductModel[] = [];

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( (params) => {
      this.products = this.productService.searchProducts( params['text'] );
    });

  }

}
