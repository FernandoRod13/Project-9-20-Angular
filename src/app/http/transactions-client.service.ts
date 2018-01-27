import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PaymentMethod } from './../models/paymentMethod';

@Injectable()
export class TransactionsClientService {
  private baseURL = 'https://project-9-20-187720.appspot.com/';
  constructor( private http: HttpClient) { }

  public getUserPaymetMethod(id: number): Observable<PaymentMethod[]> {
    const url = this.baseURL + 'transactions/getPaymentMethods?accountid=' + id;
    return this.http.get(url).map( res => {
      return res['PaymentMethods'].map(item => {
        return new PaymentMethod(
          item.payment_method_id,
          item.card_holder,
          item.card_number,
          item.zip_code,
          new Date(item.expiration_date)
        );
      });
    });
  }
}
