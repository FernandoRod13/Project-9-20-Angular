import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationClientService } from './../../http/notification-client.service';
import { ResourcesClientService } from './../../http/resource-client.service';
import { Notification } from './../../models/notification';
import { ResourceAvaliable } from '../../models/resources';
@Component({
  selector: 'app-notification-manager',
  templateUrl: './notification-manager.component.html',
  styleUrls: ['./notification-manager.component.css']
})
export class NotificationManagerComponent implements OnInit, OnDestroy {
  public notifications: Notification[];
  private notifObserver;
  public viewingResource: boolean;
  public resource: ResourceAvaliable;
  public resourceObservable;
  constructor (
    private notif: NotificationClientService,
    private res: ResourcesClientService
  ) { }

  ngOnInit() {
    this.viewingResource = false;
    this.notifObserver = this.notif.getAllNotifications().subscribe( data => {
      this.notifications = data;
    });
  }

  ngOnDestroy() {
    this.notifObserver.unsubscribe();
  }

  public viewResource(id: number) {
    this.resourceObservable = this.res.getSpecificResourceAvailable(id).subscribe( resource => {
      this.resource = resource;
      this.viewingResource = true;
    });
  }
  public closwReosurce() {
    this.resourceObservable.unsubscribe();
    this.viewingResource = false;
  }

}
