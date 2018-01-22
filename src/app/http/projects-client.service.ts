import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ResourceRequested, ResourceAvaliable } from './../models/resources';
@Injectable()
export class ProjectsClientService {
  private baseURL = 'https://project-9-20-187720.appspot.com/';
  constructor(private http: HttpClient) { }

  public getAllResourcesAvailable(): Observable<ResourceAvaliable[]> {
    const url = this.baseURL + 'resources/available';
    return this.http.get(url).map(res => {
      return res['Resources'].map(item => {
        return new ResourceAvaliable(
          item.resource_id,
          item.account_id,
          item.avaliability,
          item.category,
          item.city,
          new Date(item.date_added),
          item.description,
          new Date(item.last_update),
          item.name,
          item.qty,
          item.price
        );
      });
    });
  }

  public getAllResourcesRequested(): Observable<ResourceRequested[]> {
    const url = this.baseURL + 'resources/requested';
    return this.http.get(url).map(res => {
      return res['Resources'].map(item => {
        return new ResourceRequested(
          item.resource_id,
          item.account_id,
          item.category,
          item.city,
          item.description,
          new Date(item.requested_date),
          item.name,
          item.qty
        );
      });
    });
  }

}
