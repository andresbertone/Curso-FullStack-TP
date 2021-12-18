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
          this.reset = false; // Cuando se cambia de ruta, el boton de reset no está activo
          this.url = event.url;
        }
    })              
  }

  ngOnInit(): void {
  }

  searchProduct( $event: any ) {
    $event.preventDefault();  // Evita que se envíe el formulario
    if ( this.productFinding.length > 0 ) { // Para que no haga una búsqueda con un string vacío
      if ( this.url === '/products' ) { // Para evitar que haga la búsqueda desde otra url distinta a /products
        this.productService.filterProducts( this.productFinding.trim() ); // Se filtra el contenido
        this.reset = true;
      } 
      this.productFinding = '';
    };
  };

  onReset() {
    this.productService.getProducts(); // Se resetea el contenido y muestra todos los productos nuevamente
    this.reset = false;
  };

}
