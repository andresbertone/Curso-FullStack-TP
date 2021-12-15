import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '@app/product-service/product.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  productFinding: string = '';

  filteredProducts: any[] = [];

  constructor( private router: Router, private productService: ProductService ) { }

  ngOnInit(): void {
  }

  // Forma 1
  // searchProduct( text:string ) {
  //   this.router.navigate(['/search', text]);
  // };


  // Forma 2
  searchProduct( $event: any ) {
    $event.preventDefault();  // Evita que se envíe el formulario
    this.productService.filterProducts( this.productFinding.trim() ).subscribe(
      product => this.filteredProducts = product
    );
    // this.router.navigate(['/search', this.productFinding.trim()]); // .trim() Elimina los espacion en blanco
    this.productFinding = '';
  };

}
