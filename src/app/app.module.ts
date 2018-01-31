import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './app-material.module';
import { ResourcesClientService } from './http/resource-client.service';
import { SupplierClientService } from './http/supplier-client.service';
import { RequestersClientService } from './http/requesters-client.service';
import { ResourceManagerComponent } from './managers/resource-manager/resource-manager.component';
import { AccountManagerComponent } from './managers/account-manager/account-manager.component';
import { NotificationManagerComponent } from './managers/notification-manager/notification-manager.component';
import { SupplierManagerComponent } from './managers/supplier-manager/supplier-manager.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication/authentication.service';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationClientService } from './http/location-client.service';
import { RegisterComponent } from './register/register.component';
import { AddResourcesComponent } from './managers/add-resources/add-resources.component';
import { AddNewRequestComponent } from './managers/add-new-request/add-new-request.component';
import { NotificationClientService } from './http/notification-client.service';
import { TransactionsClientService } from './http/transactions-client.service';
import { StatisticsClientService } from './http/statistics-client.service';
import { RequestersManagerComponent } from './managers/requesters-manager/requesters-manager.component';
import { StatusMessageService } from './error-handling/status-message.service';
import { SupplierContainerComponent } from './supplier/supplier-container/supplier-container.component';
import { RequesterContainerComponent } from './requester/requester-container/requester-container.component';
import { BuyResourceComponent } from './requester/buy-resource/buy-resource.component';
import { SupplierProfileComponent } from './managers/supplier-profile/supplier-profile.component';
import { StatisticsViewerComponent } from './managers/statistics-viewer/statistics-viewer.component';
import * as Chart from 'chart.js';
import { AgmCoreModule } from '@agm/core';
import { TransactionsViewerComponent } from './managers/transactions-viewer/transactions-viewer.component';
import { InventoryManagerComponent } from './supplier/inventory-manager/inventory-manager.component';
import { InvoiceViewerComponent } from './supplier/invoice-viewer/invoice-viewer.component';
import { InvalidPermissionsComponent } from './invalid-permissions/invalid-permissions.component';
import { SupplierAuthGuardService } from './authentication/supplier-auth-guard.service';
import { RequesterAuthGuardService } from './authentication/requester-auth-guard.service';
import { AdminAuthGuardService } from './authentication/admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ResourceManagerComponent,
    AccountManagerComponent,
    NotificationManagerComponent,
    SupplierManagerComponent,
    LoginComponent,
    AdminContainerComponent,
    NotFoundComponent,
    RegisterComponent,
    AddResourcesComponent,
    AddNewRequestComponent,
    RequestersManagerComponent,
    SupplierContainerComponent,
    RequesterContainerComponent,
    BuyResourceComponent,
    SupplierProfileComponent,
    StatisticsViewerComponent,
    TransactionsViewerComponent,
    InventoryManagerComponent,
    InvoiceViewerComponent,
    InvalidPermissionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByLemrjRoy6tmbEIQA4UyuegXwmwDkJc4'
    })
  ],
  providers: [
    ResourcesClientService,
    SupplierClientService,
    RequestersClientService,
    AuthenticationService,
    LocationClientService,
    NotificationClientService,
    TransactionsClientService,
    StatisticsClientService,
    StatusMessageService,
    SupplierAuthGuardService,
    RequesterAuthGuardService,
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
