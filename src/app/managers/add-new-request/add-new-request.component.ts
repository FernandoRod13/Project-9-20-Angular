import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResourcesClientService } from './../../http/resource-client.service';
import { ResourceType } from './../../models/resources';
import { RequestersClientService } from './../../http/requesters-client.service';
import { Requester } from './../../models/requester';
import { StatusMessageService } from './../../error-handling/status-message.service';
@Component({
  selector: 'app-add-new-request',
  templateUrl: './add-new-request.component.html',
  styleUrls: ['./add-new-request.component.css']
})
export class AddNewRequestComponent implements OnInit, OnDestroy {

  public name: string;
  public description: string;
  public qty: number;
  public keywords: string;
  public requesterObserver;
  public resourceTypeObserver;
  public resourceTypes: ResourceType[];
  public selectedType: number;
  public requesters: Requester[];
  public selectedRequester: number;

  constructor(
    private res: ResourcesClientService,
    private req: RequestersClientService,
    private status: StatusMessageService
  ) { }

  ngOnInit() {
    this.requesterObserver = this.req.getAllRequester().subscribe( data => {
      this.requesters = data;
    });
    this.resourceTypeObserver = this.res.getAllResourceTypes().subscribe( data => {
      this.resourceTypes = data;
    });
  }

  ngOnDestroy() {
    this.requesterObserver.unsubscribe();
    this.resourceTypeObserver.unsubscribe();
  }

  public submitNewResourceRequest() {
    this.req.getRequesterID(this.selectedRequester).then( id => {
      const body = {
        name: this.name,
        description: this.description,
        keywords: this.keywords,
        qty: this.qty,
        requester_id: id,
        resource_type: this.selectedType
      };
      this.res.addNewResourceRequest(body).then( data => {
        this.status.success('Added Requester Succesfully!');
      }).catch( error => {
        this.status.error(error.message);
      });
    }).catch( error => {
      this.status.error('No requester ID found :(');
    });
  }

}

