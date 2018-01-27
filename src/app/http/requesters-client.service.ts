import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Requester } from './../models/requester';

@Injectable()
export class RequestersClientService {
  private baseURL = 'https://project-9-20-187720.appspot.com/';
  constructor(private http: HttpClient) { }

  public getAllRequester(): Observable<Requester[]> {
    const url = this.baseURL +  'requesters';
    return this.http.get(url).map( res => {
      return res['Requester'].map( item => {
        return new Requester(
          item.requester_id,
          item.email,
          item.first_name,
          item.last_name,
          item.phone
        );
      });
    });
  }

}
