import { Injectable } from '@angular/core';

import { UserModel } from '@app/models/user-model';

@Injectable()
export class LoginService {

  usersData: UserModel[] = [
    {
      username: "admin",
      password: "admin" 
    },
    {
      username: "user",
      password: "user"
    }
  ];

  constructor() { }

  login( user: UserModel ) {
    let userFound = this.usersData.find( (userData) => { // Se busca el usuario en el array de usuarios
      return userData.username === user.username && userData.password === user.password;
    });
    if ( userFound ) { // Si se encontró el usuario
      localStorage.setItem('logged', 'true'); // Se guarda en el localStorage la variable "logged" con el valor "true" para simular un login.
      return true;
    } else {
      return false;
    }
  };

  logout() { // Se borra el valor del localStorage para simular un cierre de sesión.
    localStorage.removeItem('logged');
  }

  isLogged() {
    if ( localStorage.getItem('logged') ) { // Si existe la variable guardada en el localStorage
      return true;
    } else {
      return false;
    };
  };

  clear() { // Se limpia el localStorage cada vez que se recarga la página.
    localStorage.clear();
  };

}
