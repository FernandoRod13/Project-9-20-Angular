import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceManagerComponent } from './managers/resource-manager/resource-manager.component';
import { AccountManagerComponent } from './managers/account-manager/account-manager.component';
import { NotificationManagerComponent } from './managers/notification-manager/notification-manager.component';
import { SupplierManagerComponent } from './managers/supplier-manager/supplier-manager.component';
import { LoginComponent } from './login/login.component';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminAuthGuardService } from './authentication/admin-auth-guard.service';
import { RequesterAuthGuardService } from './authentication/requester-auth-guard.service';
import { SupplierAuthGuardService } from './authentication/supplier-auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { RequestersManagerComponent } from './managers/requesters-manager/requesters-manager.component';
import { SupplierContainerComponent } from './supplier/supplier-container/supplier-container.component';
import { RequesterContainerComponent} from './requester/requester-container/requester-container.component';
import { BuyResourceComponent } from './requester/buy-resource/buy-resource.component';
import { StatisticsViewerComponent } from './managers/statistics-viewer/statistics-viewer.component';
import { TransactionsViewerComponent } from './managers/transactions-viewer/transactions-viewer.component';
import { InventoryManagerComponent } from './supplier/inventory-manager/inventory-manager.component';
import { InvoiceViewerComponent } from './supplier/invoice-viewer/invoice-viewer.component';
import { InvalidPermissionsComponent } from './invalid-permissions/invalid-permissions.component';
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'invalid-permissions', component: InvalidPermissionsComponent },
    { path: 'admin', redirectTo: '/admin/account', pathMatch: 'full' },
    { path: 'admin', canActivate: [AdminAuthGuardService], component: AdminContainerComponent, children: [
      { path: 'resources', component: ResourceManagerComponent },
      { path: 'suppliers', component: SupplierManagerComponent },
      { path: 'account', component: AccountManagerComponent },
      { path: 'requesters', component: RequestersManagerComponent},
      { path: 'notifications', component: NotificationManagerComponent },
      { path: 'statistics', component: StatisticsViewerComponent },
      { path: 'transactions', component: TransactionsViewerComponent }
    ]},
    { path: 'supplier', redirectTo: '/supplier/account', pathMatch: 'full' },
    { path: 'supplier', canActivate: [SupplierAuthGuardService], component: SupplierContainerComponent, children: [
      { path: 'inventory', component: InventoryManagerComponent },
      { path: 'transactions', component: InvoiceViewerComponent },
      { path: 'requesters', component: RequestersManagerComponent },
      { path: 'account', component: AccountManagerComponent },
      { path: 'notifications', component: NotificationManagerComponent }
    ]},
    { path: 'requester', redirectTo: '/requester/account', pathMatch: 'full' },
    { path: 'requester', canActivate: [RequesterAuthGuardService], component: RequesterContainerComponent, children: [
      { path: 'resources', component: ResourceManagerComponent},
      { path: 'purchase', component: BuyResourceComponent },
      { path: 'supplier', component: SupplierManagerComponent },
      { path: 'account', component: AccountManagerComponent },
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
