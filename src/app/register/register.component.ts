import { Component, OnInit } from '@angular/core';

import { RegisterModel } from './register.model';
import { RegisterService } from './register.service';
import { NgForm } from '@angular/forms';

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
        private registerService: RegisterService
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
