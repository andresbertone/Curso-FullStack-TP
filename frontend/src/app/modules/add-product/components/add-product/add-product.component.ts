import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '@app/models/product-model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product!: ProductModel;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/products']);
  };

  save() {
    console.log(this.product);
  }

}
