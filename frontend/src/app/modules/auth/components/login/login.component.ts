import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '@app/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  userValid: boolean = true;

  constructor( private loginService: LoginService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  login() {
    const logged = this.loginService.login(this.user);
    if ( logged ) { // Si el usuario es válido
      this.router.navigate( ["/home"] );
    } else {
      this.userValid = false; // Si el usuario no es válido, muestra mensaje de error en el formulario
    };
  };

}
