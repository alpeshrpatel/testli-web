import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel } from './login.model';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isError = false;
    message = '';

    loginModel: LoginModel;

    constructor(
        private router: Router,
        private loginService: LoginService) { }

    ngOnInit() {
        this.loginModel = new LoginModel();
    }

    onLogin() {
        this.isError = false;
        this.loginService.loginService(this.loginModel).subscribe((res) => {
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
        }, (error) => {
            this.isError = true;
            if (error.error.message) {
                this.message = error.error.message;
            } else {
                this.message = 'Invalid credentials.';
            }
        });
    }
}
