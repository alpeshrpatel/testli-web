import { Component, OnInit } from '@angular/core';

import { RegisterModel } from './register.model';
import { RegisterService } from './register.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

    registerModel: RegisterModel;

    constructor(
        private registerService: RegisterService
    ) { }

    ngOnInit() {
        this.registerModel = new RegisterModel();
    }

    onRegister() {
        this.registerService.registerService(this.registerModel).subscribe((res) => {
            console.log(res);
        }, (error) => {
            console.log(error);
        });
    }
}
