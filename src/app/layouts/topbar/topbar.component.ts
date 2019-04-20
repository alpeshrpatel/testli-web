import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/service/shared.service';


@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html'
})

export class TopbarComponent {
    @Output() toggleSidenav = new EventEmitter<void>();

    constructor(
        private router: Router,
        private sharedService: SharedService
    ) {
    }

    logout() {
        this.sharedService.logout();
        this.router.navigate(['/login']);
    }
}
