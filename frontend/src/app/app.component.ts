import { Component, OnInit } from '@angular/core';

import { LoginService } from '@app/login-service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tp-frontend';

  constructor( private loginService: LoginService ) {}

  ngOnInit(): void {
    this.loginService.clear();
  }
  
}
