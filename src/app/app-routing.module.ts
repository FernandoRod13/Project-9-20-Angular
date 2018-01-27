import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceManagerComponent } from './managers/resource-manager/resource-manager.component';
import { AccountManagerComponent } from './managers/account-manager/account-manager.component';
import { NotificationManagerComponent } from './managers/notification-manager/notification-manager.component';
import { SupplierManagerComponent } from './managers/supplier-manager/supplier-manager.component';
import { LoginComponent } from './login/login.component';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './authentication/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { RequestersManagerComponent } from './managers/requesters-manager/requesters-manager.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'admin', redirectTo: '/admin/resources', pathMatch: 'full' },
    { path: 'admin', canActivate: [AuthGuardService], component: AdminContainerComponent, children: [
      { path: 'resources', component: ResourceManagerComponent },
      { path: 'suppliers', component: SupplierManagerComponent },
      { path: 'account', component: AccountManagerComponent },
      { path: 'requesters', component: RequestersManagerComponent},
      { path: 'notifications', component: NotificationManagerComponent }
    ]},
    { path: '',   redirectTo: '/admin/resources', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
