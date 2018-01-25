import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ResourcesClientService} from './../../http/resource-client.service';
import { ResourceAvaliable, ResourceRequested } from './../../models/resources';
@Component({
  selector: 'app-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: ['./resource-manager.component.css']
})
export class ResourceManagerComponent implements OnInit, OnDestroy {
  public resourcesAvaliable: ResourceAvaliable[];
  public resourcesRequested: ResourceRequested[];
  private getResourceAvaliableObserver;
  private getResourceRequestedObserver;
  public availableDataSource = new MatTableDataSource<ResourceAvaliable>();
  public requestedDataSource = new MatTableDataSource<ResourceRequested>();
  public avaliableDisplayedRows = ['id', 'name', 'category', 'city', 'avaliable', 'price'];
  public requestedDisplayedRows = ['id', 'name', 'category', 'city', 'quantity'];
  constructor (private client: ResourcesClientService) { }

  ngOnInit() {
    this.getResourceAvaliableObserver = this.client.getAllResourcesAvailable().subscribe( resourceList => {
      this.resourcesAvaliable = resourceList;
      this.availableDataSource.data = this.resourcesAvaliable;
    });
    this.getResourceRequestedObserver = this.client.getAllResourcesRequested().subscribe( resourceList => {
      this.resourcesRequested = resourceList;
      this.requestedDataSource.data = this.resourcesRequested;
    });
  }

  ngOnDestroy() {
    this.getResourceAvaliableObserver.unsubscribe();
    this.getResourceRequestedObserver.unsubscribe();
  }

}
