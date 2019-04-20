import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { SuperAdminDashboardComponent } from './dashboard/super-admin-dashboard.component';
import { AdminRoutes } from './admin.route';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        SharedModule,
        LayoutModule,
        CommonModule
    ],
    declarations: [
        SuperAdminDashboardComponent
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminModule { }
