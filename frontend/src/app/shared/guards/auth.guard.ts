import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let logged = window.localStorage.getItem('logged');
      if ( logged ) { // Si está loggeado puede entrar a la ruta
        return true;
      } else { // Si no está loggeado no puede entrar a la ruta
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
