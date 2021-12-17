import { Component, OnInit } from '@angular/core';

import { SnackbarService } from '@app/snackbar-service/snackbar.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any = {};

  constructor( private snackbarService: SnackbarService ) { }

  ngOnInit(): void {
  }

  send() {
    if ( this.isValid() ) {
      this.snackbarService.openSnackbar("Mensaje enviado", "Ok");
      this.contact = {};
    }
  };

  isValid() {
    if ( this.contact.firstName && this.contact.surname && this.contact.email && this.contact.message ) {
      return true;
    } else {
      return false;
    }
  };

}
