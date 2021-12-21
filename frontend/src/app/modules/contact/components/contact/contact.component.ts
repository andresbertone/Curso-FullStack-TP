import { Component, OnInit } from '@angular/core';

import { SnackbarService } from '@app/snackbar-service/snackbar.service';
import { ContactService } from '@app/contact-service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any = {};

  constructor( private snackbarService: SnackbarService, 
               private contactService: ContactService ) { }

  ngOnInit(): void {
  }

  send() {
    if ( this.formIsValid() ) { // Si el formulario es válido
      this.contactService.send(this.contact).subscribe(
        () => {
          this.snackbarService.openSnackbar("Mensaje enviado", "Ok");
          this.contact = {};
        }
      )
    } else {
      this.snackbarService.openSnackbar("Complete todos los campos obligatorios (*)");
    }
  }

  formIsValid() { 
    if ( this.contact.firstName && this.contact.lastName && this.contact.email && this.contact.message ) { // Si todos los campos están completados
      return true;
    } else {
      return false;
    }
  };

}
