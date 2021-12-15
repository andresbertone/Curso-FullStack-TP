import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '@app/services/product.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  productFinding: string = '';

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
    this.productService.filterProducts( this.productFinding.trim() );
    // this.router.navigate(['/search', this.productFinding.trim()]); // .trim() Elimina los espacion en blanco
    this.productFinding = '';
  };

}
