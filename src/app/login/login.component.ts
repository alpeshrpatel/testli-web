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

    loginModel: LoginModel;

    constructor(
        private router: Router,
        private loginService: LoginService) { }

    ngOnInit() {
        this.loginModel = new LoginModel();
    }

    onLogin() {
        this.loginService.loginService(this.loginModel).subscribe((res) => {
            console.log(res);
        }, (error) => {
            console.log(error);
        });
        // localStorage.setItem('isLoggedin', 'true');
        // this.router.navigate(['/dashboard']);
    }
}
