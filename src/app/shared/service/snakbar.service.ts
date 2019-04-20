import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnakbarService {

    constructor(
        private snackBar: MatSnackBar
    ) { }

    public success(message) {
        this.toaster(message, 'green-snackbar');
    }

    public error(message) {
        this.toaster(message, 'red-snackbar');
    }

    toaster(message: string, snakBarColorClass: string) {
        this.snackBar.open(message, 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: [snakBarColorClass]
        });
    }
}
