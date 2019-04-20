import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { CanActivateChild, Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

    constructor(
        private sharedService: SharedService,
        private router: Router
    ) { }

    canActivate(): boolean {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        } else {
            this.sharedService.logout();
            return false;
        }
    }

}

