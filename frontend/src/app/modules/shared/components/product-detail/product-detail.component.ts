import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductModel } from '@app/models/product-model';
import { SupplierModel } from '@app/models/supplier-model';

import { ProductService } from '@app/product-service/product.service';
import { SupplierService } from '@app/supplier-service/supplier.service';
import { SnackbarService } from '@app/snackbar-service/snackbar.service';
import { LoginService } from '@app/login-service/login.service';

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
               private router: Router,
               private productService: ProductService,
               private supplierService: SupplierService,
               private snackbarService: SnackbarService,
               private loginService: LoginService ) {}
              
  ngOnInit(): void {
    this.loading = true;
    this.loadProduct();
  }

  loadProduct() { // Carga el producto seleccionado
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

  loadSupplier() { // Carga el proveedor del producto seleccionado
    if ( this.product.idSupplier ) {
      this.supplierService.getSupplier(this.product.idSupplier).subscribe(
        (supplier) => {
          this.supplier = supplier;
        }
      )
    }
  };

  deleteProduct( productId: string ) { // Elimina el producto seleccionado
    const isLogged = this.loginService.isLogged();
    if ( isLogged ) { // Si está logueado, elimina el producto y muestra mensaje de éxito
      this.productService.deleteProduct(productId).subscribe(
        () => {
          this.snackbarService.openSnackbar( "Producto eliminado con éxito" );
          this.router.navigate(['/products']);
        }
      );
    } else { // Si no está logueado, muestra mensaje y redirecciona al login
      this.snackbarService.openSnackbar( "Debe iniciar sesión para eliminar un producto" );
      this.router.navigate(['/login']);
    }
  };

  updateProduct( productId: string ) { // Actualiza el producto seleccionado
    const isLogged = this.loginService.isLogged();
    if ( isLogged ) { // Si está logueado, actualiza el producto y muestra mensaje de éxito
      this.router.navigate(['/products/edit-product', productId]);
    } else { // Si no está logueado, muestra mensaje y redirecciona al login
      this.snackbarService.openSnackbar( "Debe iniciar sesión para editar un producto" );
      this.router.navigate(['/login']);
    }
  };

}
