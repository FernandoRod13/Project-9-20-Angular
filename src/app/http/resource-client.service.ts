import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ResourceRequested, ResourceAvaliable, ResourceType } from './../models/resources';
@Injectable()
export class ResourcesClientService {
  private baseURL = 'https://project-9-20-187720.appspot.com/';
  constructor(private http: HttpClient) { }

  public getAllResourcesAvailable(): Observable<ResourceAvaliable[]> {
    const url = this.baseURL + 'resources/available';
    return this.http.get(url).map(res => {
      return res['Resources'].map(item => {
        return new ResourceAvaliable(
          item.resource_id,
          item.account_id,
          item.availability,
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

  public getAllResourceTypes(): Observable<ResourceType[]> {
    const url = this.baseURL + 'resource_type';
    return this.http.get(url).map( res => {
      return res['Resource_Type'].map( item => {
        return new ResourceType(
          item.resource_type_id,
          item.type_name
        );
      });
    });
  }

  public addNewResourceAvailable(body: any): Promise<Object> {
    const url = this.baseURL + 'resources/available';
    const headers = new HttpHeaders();
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post(url, body, options).toPromise();
  }

  public addNewResourceRequest(body: any): Promise<Object> {
    const url = this.baseURL + 'resources/requested';
    const headers = new HttpHeaders();
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post(url, body, options).toPromise();
  }

  public getSpecificResourceAvailable(id: number): Observable<ResourceAvaliable> {
    const url = this.baseURL + 'resources/available/' + id;
    return this.http.get(url).map( res => {
      const resource = res['Resources'][0];
      return new ResourceAvaliable(
        resource.resource_id,
        resource.account_id,
        resource.availability,
        resource.category,
        resource.city,
        new Date(resource.date_added),
        resource.description,
        new Date(resource.last_update),
        resource.name,
        resource.qty,
        resource.price
      );
    });
  }

}
