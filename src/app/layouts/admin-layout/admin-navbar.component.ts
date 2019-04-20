import { Component } from '@angular/core';
import { MenuService } from './navbar.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-navbar',
    templateUrl: './admin-navbar.component.html'
})

export class AdminNavbarComponent {
    constructor(
        public menuService: MenuService,
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
