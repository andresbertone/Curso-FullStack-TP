import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {

  snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration: 5000
  };

  constructor( private snackBar: MatSnackBar ) { }

  openSnackbar( msg: string, action: string = "Cerrar" ) {
    this.snackBar.open(msg, action, this.snackBarConfig);
  };

}
