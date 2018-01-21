import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ProjectsClientService} from './../../http/projects-client.service';
import { Resource } from './../../models/resources';
@Component({
  selector: 'app-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: ['./resource-manager.component.css']
})
export class ResourceManagerComponent implements OnInit, OnDestroy {
  public resources: Resource[];
  private getResourceObserver;
  public dataSource = new MatTableDataSource<Resource>();
  public displayedRows = ['name', 'category', 'city', 'avaliable', 'price'];
  constructor (private client: ProjectsClientService) { }

  ngOnInit() {
    this.getResourceObserver = this.client.getAllResourcesAvailable().subscribe( resourceList => {
      this.resources = resourceList;
      this.dataSource.data = this.resources;
    });
  }

  ngOnDestroy() {
    this.getResourceObserver.unsubscribe();
  }

}
