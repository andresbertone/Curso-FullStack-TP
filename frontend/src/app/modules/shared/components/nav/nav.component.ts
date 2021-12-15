import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  logged: boolean = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.logged = true;
    window.localStorage.setItem('logged', 'true');
  };

  onLogout() {
    this.logged = false;
    window.localStorage.removeItem('logged');
  };

}
