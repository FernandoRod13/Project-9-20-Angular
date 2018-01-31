import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Supplier } from './../models/supplier';

@Injectable()
export class SupplierClientService {
  private baseURL = 'https://project-9-20-187720.appspot.com/';
  constructor(private http: HttpClient) { }

  public getAllSuppliers(): Observable<Supplier[]> {
    const url = this.baseURL + 'suppliers';
    return this.http.get(url).map( res => {
      return res['Suppliers'].map( item => {
        return new Supplier(
          item.city,
          item.email,
          item.first_name,
          item.last_name,
          item.phone,
          item.supplier_id
        );
      });
    });
  }

  public getSupplierInfo (id: number): Promise<Supplier> {
    const url = this.baseURL + 'suppliers/' + id;
    return this.http.get(url).map( res => {
      return res['Supplier'].map(item => {
        return new Supplier(
          item.city,
          item.email,
          item.first_name,
          item.last_name,
          item.phone,
          item.supplier_id
        );
      })[0];
    }).toPromise();
  }

  public getSupplierID( accountID: number): Promise<number> {
    const url = this.baseURL + 'getSupplierId/' + accountID;
    return this.http.get(url).map( res => {
      return res['id'];
    }).toPromise();
  }

}
