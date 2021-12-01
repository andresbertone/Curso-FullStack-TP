import { ProductModel } from './../../models/product-model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductModel;
  @Input() idProduct!: string;

  // @Output() productSelected: EventEmitter<any> = new EventEmitter();

  constructor( private router: Router ) {}

  ngOnInit(): void {
  }

  seeProduct() {
    this.router.navigate( ["/product", this.idProduct] );
  };

}
