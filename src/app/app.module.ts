import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { ProjectsClientService} from './http/projects-client.service';
import { ResourceManagerComponent } from './managers/resource-manager/resource-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    ResourceManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [ProjectsClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
