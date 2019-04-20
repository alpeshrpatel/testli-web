import { Injectable } from '@angular/core';
import { HttpClientService } from '../shared/service/httpclient.service';
import { LoginModel, RegisterModel } from './authentication.model';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClientService
  ) { }

  login(loginModel: LoginModel) {
    return this.http.post<LoginModel>(AppConfig.API_login, loginModel);
  }

  registerService(registerModel: RegisterModel) {
    return this.http.post<RegisterModel>(AppConfig.API_register, registerModel);
  }

}
