import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductModel } from '@app/models/product-model';
import { ProductService } from '@app/product-service/product.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: ProductModel[] = [];

  loading: boolean = false;

  subscription: Subscription = new Subscription();

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.loadProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Cuando se destruye el componente, se cancela la subscripción para que no quede escuchando los cambios
  }

  loadProducts() { // Se cargan todos los productos
    this.productService.getProducts().subscribe(
      (products: ProductModel[]) => {
        this.products = products;
        if ( this.products.length > 0 ) {
          this.loading = false;
        }
      }
    );
  };

}
