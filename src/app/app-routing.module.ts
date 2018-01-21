import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceManagerComponent} from './managers/resource-manager/resource-manager.component';

const appRoutes: Routes = [
    { path: '', component: ResourceManagerComponent }
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
