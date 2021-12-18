import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {

  snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    duration: 3500
  };

  constructor( private snackBar: MatSnackBar ) { }

  openSnackbar( msg: string, action: string = "Cerrar" ) {
    this.snackBar.open(msg, action, this.snackBarConfig);
  };

}
