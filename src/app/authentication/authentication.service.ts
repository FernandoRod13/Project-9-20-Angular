import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { User } from './../models/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  private baseURL = 'https://project-9-20-187720.appspot.com/';
  private uid: number;
  private isLoggedIn = false;
  private redirectURL: string;
  public currentUser: User;
  constructor (
    private http: HttpClient,
    private router: Router
  ) { }

  public loggedIn(): boolean {
    return this.isLoggedIn;
  }

  public login (email: string, password: string): Promise<User> {
    const url = this.baseURL + '/login?email=' + email + '&password=' + password;
    return this.http.get(url).map( data => {
      const admin = data['Administrator'][0];
        this.isLoggedIn = true;
        this.currentUser = new User(
          admin.admin_id,
          admin.first_name,
          admin.last_name,
          admin.email,
          admin.phone,
          admin.city,
          admin.type
        );
        return this.currentUser;
      }).toPromise();
  }

  public changePassword (email: string, password: string):Promise<Object> {
    const url = this.baseURL + '/user/changepassword?email=' + email + '&password=' + password;
    return this.http.get(url).toPromise();
  }

  public setRedirect(url: string) {
    this.redirectURL = url;
  }

  public redirect(): string {
    return this.redirectURL;
  }

  public register(type: number, body: any): Promise<Object> {
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
    headers.append('Content-Type', 'application/json');
    return this.http.post(url, body, {headers: headers}).toPromise();
  }

  public signOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
