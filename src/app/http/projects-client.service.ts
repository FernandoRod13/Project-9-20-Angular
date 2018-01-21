import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Resource } from './../models/resources';
@Injectable()
export class ProjectsClientService {
  private baseURL = 'https://project-9-20-187720.appspot.com/';
  constructor(private http: HttpClient) { }

  public getAllResourcesAvailable(): Observable<Resource[]> {
    const url = this.baseURL + 'resources/available';
    return this.http.get(url).map(res => {
      return res['Resources'].map(item => {
        return new Resource(
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

  public getAllResourcesRequested() {
    const url = this.baseURL + 'resources/requested';
    this.http.get(url).subscribe( data => {
      console.log(data);
    });
  }

}
