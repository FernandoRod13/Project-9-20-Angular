import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './app-material.module';
import { ProjectsClientService } from './http/projects-client.service';
import { SupplierClientService } from './http/supplier-client.service';
import { ResourceManagerComponent } from './managers/resource-manager/resource-manager.component';
import { AccountManagerComponent } from './managers/account-manager/account-manager.component';
import { PaymentMethodManagerComponent } from './managers/payment-method-manager/payment-method-manager.component';
import { NotificationManagerComponent } from './managers/notification-manager/notification-manager.component';
import { SupplierManagerComponent } from './managers/supplier-manager/supplier-manager.component';
import { PurchaseManagerComponent } from './managers/purchase-manager/purchase-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    ResourceManagerComponent,
    AccountManagerComponent,
    PaymentMethodManagerComponent,
    NotificationManagerComponent,
    SupplierManagerComponent,
    PurchaseManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [ProjectsClientService, SupplierClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
