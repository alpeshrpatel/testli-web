import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { RegisterModel } from '../authentication.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

    isSuccess = false;
    isError = false;
    message = '';

    registerModel: RegisterModel;

    constructor(
        private registerService: AuthenticationService
    ) { }

    ngOnInit() {
        this.registerModel = new RegisterModel();
    }

    onRegister(registerForm: NgForm) {
        this.isSuccess = false;
        this.isError = false;
        this.registerService.registerService(this.registerModel).subscribe((res) => {
            this.isSuccess = true;
            registerForm.reset();
            this.message = 'You have successfully registered.';
        }, (error) => {
            this.isError = true;
            if (error.error.message) {
                this.message = error.error.message;
            } else {
                this.message = 'Something is wrong.';
            }
        });
    }
}
