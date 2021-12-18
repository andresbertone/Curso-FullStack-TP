import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

import { AuthGuard } from '@app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [AuthGuard] // Se aplica el guard cuando quiere entrar a la ruta
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
    canActivate: [AuthGuard] // Se aplica el guard cuando quiere entrar a la ruta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
