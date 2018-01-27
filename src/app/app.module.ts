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
import { AuthGuardService } from './authentication/auth-guard.service';
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
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionCharts from 'fusioncharts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular2-fusioncharts';
import { StatisticsManagerComponent } from './managers/statistics-manager/statistics-manager.component';
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);
import { RequestersManagerComponent } from './managers/requesters-manager/requesters-manager.component';


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
    StatisticsManagerComponent
    RequestersManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    FusionChartsModule
  ],
  providers: [
    ResourcesClientService,
    SupplierClientService,
    RequestersClientService,
    AuthGuardService,
    AuthenticationService,
    LocationClientService,
    NotificationClientService,
    TransactionsClientService,
    StatisticsClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
