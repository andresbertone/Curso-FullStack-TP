import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductModel } from '@app/models/product-model';
import { SupplierModel } from '@app/models/supplier-model';

import { ProductService } from '@app/product-service/product.service';
import { SupplierService } from '@app/supplier-service/supplier.service';
import { SnackbarService } from '@app/snackbar-service/snackbar.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: ProductModel;
  supplier!: SupplierModel;

  loading: boolean = false;

  constructor( private activatedRoute: ActivatedRoute, 
               private productService: ProductService,
               private supplierService: SupplierService,
               private router: Router,
               private snackbarService: SnackbarService ) {}
              
  ngOnInit(): void {
    this.loading = true;
    this.loadProduct();
  }

  loadProduct() {
    const paramProductId = this.activatedRoute.snapshot.paramMap.get('idProduct');
    if ( paramProductId ) {
      this.productService.getProduct(paramProductId).subscribe(
        (product) => {
          this.product = product;
          this.loadSupplier();
          this.loading = false;
        });
    }
  };

  loadSupplier() {
    if ( this.product.idSupplier ) {
      this.supplierService.getSupplier(this.product.idSupplier).subscribe(
        (supplier) => {
          this.supplier = supplier;
        }
      )
    }
  };

  deleteProduct( productId: string ) {
    const logged = window.localStorage.getItem('logged');
    if ( logged ) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          this.snackbarService.openSnackbar( "Producto eliminado con éxito" );
          this.router.navigate(['/products']);
        }
      );
    } else {
      this.snackbarService.openSnackbar( "Debe iniciar sesión para eliminar productos" );
      this.router.navigate(['/login']);
    }
  };

}
