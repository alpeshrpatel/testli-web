import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '..';

@Injectable()
export class SharedService {

    constructor(
        private router: Router,
        private storageService: StorageService
    ) { }

    getUserData(setKey: string, key: string) {
        return this.storageService.getObject(setKey) ? this.storageService.getObject(setKey)[key] : null;
    }

    setUserData(setKey: string, data: object) {
        this.storageService.setObject(setKey, data);
    }

    getUserSession(setKey: string, key: string) {
        return this.storageService.getSession(setKey) ? this.storageService.getSession(setKey)[key] : null;
    }

    setUserSession(setKey: string, data: object) {
        this.storageService.setSession(setKey, data);
    }

    logout() {
        this.storageService.removeObject('testli');
        this.storageService.destroySession('testli');
        this.storageService.removeObject('rtUser');
        this.storageService.destroySession('rtUser');
        this.router.navigate(['/login']);
    }
}
