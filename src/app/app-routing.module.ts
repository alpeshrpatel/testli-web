import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutsideLayoutComponent, AdminLayoutComponent, UserLayoutComponent, ErrorComponent } from './layouts';
import { AuthGuardService } from './shared/service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: OutsideLayoutComponent,
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    // canActivate: [AuthGuardService],
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    // canActivate: [AuthGuardService],
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
