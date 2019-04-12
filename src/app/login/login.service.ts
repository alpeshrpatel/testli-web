import { Injectable } from '@angular/core';

import { HttpClientService } from '../shared/services';
import { AppConfig } from '../app.config';
import { LoginModel } from './login.model';

@Injectable()
export class LoginService {
    constructor(
        private http: HttpClientService) { }

    loginService(loginModel: LoginModel) {
        return this.http.post(AppConfig.API_login, loginModel);
    }
}
