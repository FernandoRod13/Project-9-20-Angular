import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ResourceRequested } from './../../models/resources';
import { ResourcesClientService} from './../../http/resource-client.service';
import { RequestersClientService } from './../../http/requesters-client.service';
import { AuthenticationService } from './../../authentication/authentication.service';
import { StatusMessageService } from './../../error-handling/status-message.service';
@Component({
  selector: 'app-requests-viewer',
  templateUrl: './requests-viewer.component.html',
  styleUrls: ['./requests-viewer.component.css']
})
export class RequestsViewerComponent implements OnInit {
  public resourcesRequested: ResourceRequested[];
  private getResourceRequestedObserver;
  public requestedDisplayedRows = ['id', 'name', 'category', 'city', 'quantity'];
  public requestedDataSource = new MatTableDataSource<ResourceRequested>();
  public requester_id: number;
  public requesting: boolean;
  constructor(
    private resources: ResourcesClientService,
    private requesters: RequestersClientService,
    private auth: AuthenticationService,
    private status: StatusMessageService
  ) { }

  ngOnInit() {
    this.requesting = false;
    this.requesters.getRequesterID(this.auth.currentUser.uid).then( id => {
      this.requester_id = id;
      this.getResourceRequestedObserver = this.resources.getResourcesByRequester(id).then( resourceList => {
        this.resourcesRequested = resourceList;
        this.requestedDataSource.data = this.resourcesRequested;
      }).catch(error => {
        this.status.error(error.message);
      });
    }).catch(error => {
      this.status.error(error.message);
    });
  }

  showNewRequest() {
    this.requesting = true;
  }

  onRequested(event) {
    if (event) {
      this.hideNewRequest();
    }
  }

  hideNewRequest() {
    this.requesting = false;
  }

}
