import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '', // Si no se especifica una ruta, se muestra el home
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent 
    // Posiblemente tenga que hacer una ruta con un hijo para ver más detalle de los productos
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**', // Si se especifica una ruta que no es válida, se muestra el home
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
