import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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

}
