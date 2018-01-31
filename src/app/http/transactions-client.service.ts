import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PaymentMethod } from './../models/paymentMethod';
import { Purchase } from '../models/purchases';

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

  public getBuyerPurchaces(id: number): Observable<Purchase[]> {
    const url = this.baseURL + 'transactions/getBuyerTransaction?requesterid=' + id;
    return this.http.get(url).map( res => {
      return res['Transactions'].map(item => {
        return new Purchase(
          item.purchase_id,
          item.supplier_first_name + ' ' + item.supplier_last_name,
          item.supplier_id,
          new Date(item.purchase_date),
          item.resource_id,
          item.resource_name,
          item.resource_description,
          item.purchase_price,
          item.quantity,
          item.buyer_first_name + ' ' + item.buyer_last_name
        );
      });
    });
  }

  public addNewPaymentMethod (card: PaymentMethod, uid: number): Promise<PaymentMethod> {
    const body = {
      accountid: uid,
      card_holder: card.cardHolder,
      card_number: card.cardNumber,
      expiration_date: card.expirationDate,
      zip_code: card.zipCode
    };
    const url = this.baseURL + 'transactions/addPaymentMethod';
    return this.http.post(url, body).map( res => {
      console.log(res);
      const newCard = res['PaymentMethod'];
      return new PaymentMethod(
        newCard.payment_method_id,
        newCard.card_holder,
        newCard.card_number,
        newCard.zip_code,
        new Date(newCard.expiration_date)
      );
    }).toPromise();
  }

  public purchaseResource (amount: number, resourceID: number, requesterID: number): Promise<Object> {
    const body = {
      resourceid: resourceID,
      purchaseqty: amount,
      requesterid: requesterID
    };
    const url = this.baseURL + 'transactions/buyResource';
    return this.http.post(url, body).toPromise();
  }

  public getAllTransactions(): Observable<Purchase[]> {
    const url = this.baseURL + 'transactions/getAll';
    return this.http.get(url).map( res => {
      return res['Transactions'].map( item => {
        return new Purchase(
          item.purchase_id,
          item.supplier_first_name + ' ' + item.supplier_last_name,
          item.supplier_id,
          new Date(item.purchase_date),
          item.resource_id,
          item.resource_name,
          item.resource_description,
          item.purchase_price,
          item.quantity,
          item.buyer_first_name + ' ' + item.buyer_last_name
        );
      });
    });
  }

  public getSupplierTransactions(id: number): Observable<Purchase[]> {
    const url = this.baseURL + 'transactions/getSupplierTransaction?supplierid=' + id;
    return this.http.get(url).map( res => {
      return res['Transactions'].map(item => {
        return new Purchase(
          item.purchase_id,
          item.supplier_first_name + ' ' + item.supplier_last_name,
          item.supplier_id,
          new Date(item.purchase_date),
          item.resource_id,
          item.resource_name,
          item.resource_description,
          item.purchase_price,
          item.quantity,
          item.buyer_first_name + ' ' + item.buyer_last_name
        );
      });
    });
  }

}
