import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { ProductService } from '@app/product-service/product.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  productFinding: string = '';
  reset: boolean = false;

  url: string = '';

  constructor( private productService: ProductService,
               private router: Router ) { 
    this.router.events.subscribe(
      (event) => {
        if ( event instanceof NavigationEnd ) {
          this.url = event.url;
        }
    })              
  }

  ngOnInit(): void {
  }

  searchProduct( $event: any ) {
    $event.preventDefault();  // Evita que se envíe el formulario
    if ( this.productFinding.length > 0 ) {
      if ( this.url === '/products' ) {
        this.productService.filterProducts( this.productFinding.trim() );
        this.reset = true;
      } 
      this.productFinding = '';
    };
  };

  onReset() {
    this.productService.getProducts();
    this.reset = false;
  };

}
