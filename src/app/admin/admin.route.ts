import { Routes } from '@angular/router';
import { SuperAdminDashboardComponent } from './dashboard/super-admin-dashboard.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: SuperAdminDashboardComponent
    },
    {
        path:'',
        loadChildren: '../common-module/common-module.module#CommonModuleModule'
    }
];
