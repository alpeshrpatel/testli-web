import { Component } from '@angular/core';
import { UserMenuService } from './navbar.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-navbar',
    templateUrl: './user-navbar.component.html'
})

export class UserNavbarComponent {
    constructor(
        public menuService: UserMenuService,
        public router: Router) {
    }

    addMenuItem(): void {
        this.menuService.add({
            state: 'menu',
            name: 'MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                { state: 'menu', name: 'MENU' },
                { state: 'timeline', name: 'MENU' }
            ]
        });
    }
}
