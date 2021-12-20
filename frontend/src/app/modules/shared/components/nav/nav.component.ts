import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { LoginService } from '@app/login-service/login.service';
import { SnackbarService } from '@app/snackbar-service/snackbar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn: boolean = false;

  constructor( private router: Router,
               private loginService: LoginService,
               private snackbarService: SnackbarService ) { 
    
    this.router.events.subscribe(
      (event) => {
        if ( event instanceof NavigationEnd ) {
          this.verifyLogin(); // Verifico si el usuario está logueado en cada ruta donde se mueva. 
        }
    });

  }

  ngOnInit(): void {
    this.verifyLogin();
  }

  verifyLogin() {
    this.loggedIn = this.loginService.isLogged(); // Verifico si el usuario está logueado.
  };

  login() {
    if ( !this.loggedIn ) this.router.navigate( ["/login"] )  // Si no está logueado, se hace una redirección a la página de login.
  };

  logout() {
    if ( this.loggedIn ) { // Si está logueado, y se presiona el botón "cerrar sesión"
      this.loginService.logout();
    };
    this.loggedIn = false;
    this.router.navigate( ["/login"] );
  };

  addProduct() {
    if ( this.loggedIn ) { // Si está logueado, y se presiona la opción "Nuevo producto"
      this.router.navigate(['/products/add-product']);
    } else { // Si no está logueado, se muestra un mensaje y se redirecciona al login
      this.router.navigate(['/login']);
      this.snackbarService.openSnackbar( "Debe iniciar sesión para agregar un producto" );
    }
  };

}
