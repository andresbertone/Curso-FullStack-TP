import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  searchProduct( text:string ) {
    this.router.navigate(['/search', text]);
  };

}
