import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';

import { SnackbarService } from '@app/snackbar-service/snackbar.service';
import { ContactService } from '@app/contact-service/contact.service';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ],
  providers: [SnackbarService, ContactService]
})
export class ContactModule { }
