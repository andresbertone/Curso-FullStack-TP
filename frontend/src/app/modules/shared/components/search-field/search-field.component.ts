import { Component, OnInit } from '@angular/core';

import { ProductService } from '@app/product-service/product.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  productFinding: string = '';
  reset: boolean = false;

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
  }

  searchProduct( $event: any ) {
    $event.preventDefault();  // Evita que se envíe el formulario
    if ( this.productFinding.length > 0 ) {
      this.productService.filterProducts( this.productFinding.trim() );
      this.productFinding = '';
      this.reset = true;
    };
  };

  onReset() {
    this.productService.resetProducts();
    this.reset = false;
  };

}
