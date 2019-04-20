import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { errorRoute } from './error/error.route';
import {
    ErrorComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,

    TopbarComponent,
    FooterComponent,

    AdminNavbarComponent,
    AdminLayoutComponent,

    UserLayoutComponent,
    UserNavbarComponent,

    OutsideLayoutComponent
} from './';

import { MenuService } from './admin-layout/navbar.service';
import { UserMenuService } from './user-layout/navbar.service';

const LAYOUT_ROUTES = [
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES),
        SharedModule
    ],
    declarations: [
        ErrorComponent,
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective,
        TopbarComponent,
        FooterComponent,
        AdminNavbarComponent,
        AdminLayoutComponent,
        OutsideLayoutComponent,
        UserLayoutComponent,
        UserNavbarComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
        MenuService,
        UserMenuService
    ]
})

export class LayoutsModule { }
