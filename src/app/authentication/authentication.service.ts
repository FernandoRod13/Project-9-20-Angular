import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Admin } from './../models/admin';

@Injectable()
export class AuthenticationService {
  private baseURL = 'https://project-9-20-187720.appspot.com/';
  private uid: number;
  private isLoggedIn = false;
  private redirectURL: string;
  constructor ( private http: HttpClient ) { }

  public loggedIn(): boolean {
    return this.isLoggedIn;
  }

  public login (email: string, password: string): Observable<Admin> {
    const url = this.baseURL + '/login?email=' + email + '&password=' + password;
    return this.http.get(url).map( data => {
      const admin = data['Administrator'][0];
        this.isLoggedIn = true;
        return new Admin(
          admin.admin_id,
          admin.email,
          admin.first_name,
          admin.last_name,
          admin.phone,
          admin.city
        );
      });
  }

  public logout() {
    this.isLoggedIn = false;
  }

  public setRedirect(url: string) {
    this.redirectURL = url;
  }

  public redirect(): string {
    return this.redirectURL;
  }

  public register(type: number, body: any) {
    let route = '';
    switch (type) {
      case 0:
        route = 'admin';
        break;
      case 1:
        route = 'suppliers';
        break;
      case 2:
        route = 'requesters';
        break;
    }
    const url = this.baseURL + route;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //console.log(body);
    const request = this.http.post(url, body, {headers: headers});
    //console.log(request);
    request.subscribe(
      data => {
      console.log(data);
    },
    // Errors will call this callback instead:
    err => {
      console.log(err);
    });
  }

}
