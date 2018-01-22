import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceManagerComponent } from './managers/resource-manager/resource-manager.component';
import { AccountManagerComponent } from './managers/account-manager/account-manager.component';
import { NotificationManagerComponent } from './managers/notification-manager/notification-manager.component';
import { PaymentMethodManagerComponent } from './managers/payment-method-manager/payment-method-manager.component';
import { PurchaseManagerComponent } from './managers/purchase-manager/purchase-manager.component';
import { SupplierManagerComponent } from './managers/supplier-manager/supplier-manager.component';
const appRoutes: Routes = [
    { path: 'resources', component: ResourceManagerComponent },
    { path: 'suppliers', component: SupplierManagerComponent },
    { path: 'payments', component: PaymentMethodManagerComponent },
    { path: 'purchases', component: PurchaseManagerComponent },
    { path: 'account', component: AccountManagerComponent },
    { path: 'notifications', component: NotificationManagerComponent },
    { path: '',   redirectTo: '/resources', pathMatch: 'full' },
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
