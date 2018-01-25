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

  public addNewResourceAvailable(content: any) {
    const url = this.baseURL + 'resources/available';
    const headers = new HttpHeaders();
    const body = new URLSearchParams();
    body.set('name', content.name);
    body.set('description', content.description);
    body.set('qty', content.qty);
    body.set('keywords', content.keywords);
    body.set('price', content.price);
    body.set('supplier_id', content.supplier_id);
    body.set('resource_type_id', content.resource_type_id);
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post(url, body.toString(), options).subscribe(// Successful responses call the first callback.
      data => {
        console.log(data);
      },
      // Errors will call this callback instead:
      err => {
        console.log(err);
      });
  }

}
