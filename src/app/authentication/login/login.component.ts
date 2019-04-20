import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LoginModel } from '../authentication.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    isError = false;
    message = '';
    passwordShow = false;

    loginModel: LoginModel;

    constructor(
        private router: Router,
        private loginService: AuthenticationService) { }

    ngOnInit() {
        this.loginModel = new LoginModel();
    }

    onLogin() {
        this.isError = false;
        this.loginService.login(this.loginModel).subscribe((res) => {
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
