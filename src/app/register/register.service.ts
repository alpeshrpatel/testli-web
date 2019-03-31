import { Injectable } from '@angular/core';

import { HttpClientService } from '../shared/services';
import { AppConfig } from '../app.config';
import { RegisterModel } from './register.model';

@Injectable()
export class RegisterService {
    constructor(
        private http: HttpClientService) { }

    registerService(registerModel: RegisterModel) {
        return this.http.post(AppConfig.API_register, registerModel);
    }
}
