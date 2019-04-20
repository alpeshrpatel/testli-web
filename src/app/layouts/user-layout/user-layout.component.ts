import { Component, NgZone, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import { PerfectScrollbarConfigInterface, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { MediaMatcher } from '@angular/cdk/layout';

const SMALL_WIDTH_BREAKPOINT = 960;

@Component({
    selector: 'app-user-layout',
    templateUrl: './user-layout.component.html'
})

export class UserLayoutComponent implements OnInit, OnDestroy {
    private _router: Subscription;

    mediaMatcher: MediaQueryList;
    url: string;
    sidePanelOpened;
    options = {
        collapsed: false,
        compact: false,
        boxed: false,
        dark: false,
        dir: 'ltr'
    };

    @ViewChild('sidemenu') sidemenu;
    @ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;
    private _mobileQueryListener: () => void;
    public config: PerfectScrollbarConfigInterface = {};

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private router: Router,
        zone: NgZone) {
        this.mediaMatcher = media.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mediaMatcher.addListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
        this.url = this.router.url;

        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            document.querySelector('.app-inner > .mat-drawer-content > div').scrollTop = 0;
            this.url = event.url;
            this.runOnRouteChange();
        });
    }

    ngOnDestroy(): void {
        this._router.unsubscribe();
    }

    runOnRouteChange(): void {
        if (this.isOver()) {
            this.sidemenu.close();
        }

        this.updatePS();
    }

    receiveOptions($event): void {
        this.options = $event;
    }

    isOver(): boolean {
        // if (this.url.match('/dashboard')) {
        //     return true;
        // } else {
            return this.mediaMatcher.matches;
        // }
    }

    menuMouse(event): void {
        if (this.mediaMatcher.matches && this.options.collapsed) {
            this.sidemenu.mode = event;
        }
    }

    updatePS(): void {
        if (!this.mediaMatcher.matches && !this.options.compact) {
            setTimeout(() => {
                this.directiveScroll.update();
            }, 350);
        }
    }
}
