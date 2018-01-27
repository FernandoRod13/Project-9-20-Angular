import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from './../../authentication/authentication.service';
import { TransactionsClientService } from './../../http/transactions-client.service';
import { User } from './../../models/user';
import { PaymentMethod } from '../../models/paymentMethod';
import { MatTableDataSource } from '@angular/material';
import { Purchase } from '../../models/purchases';
@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.css']
})
export class AccountManagerComponent implements OnInit, OnDestroy {
  private user: User;
  private paymentMethodObserver;
  public paymentMethods: PaymentMethod[];
  public paymentMethodDataSource =  new MatTableDataSource<PaymentMethod>();
  public paymenMethodColumns = ['id', 'cardHolder', 'cardNumber', 'zip', 'date'];
  public purchasesDataSource = new MatTableDataSource<Purchase>();
  public purchaseColumns = ['id', 'resource_name', 'purchasePrice', 'qty', 'supplier', 'date'];
  private purchaseObserver;
  public purchaseList: Purchase[];

  constructor(
    private auth: AuthenticationService,
    private transactions: TransactionsClientService
  ) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
    this.paymentMethodObserver = this.transactions.getUserPaymetMethod(this.user.uid).subscribe( cards => {
      this.paymentMethods = cards;
      this.paymentMethodDataSource.data = cards;
    });
    this.purchaseObserver = this.transactions.getBuyerPurchaces(this.user.uid).subscribe( purchases => {
      this.purchaseList = purchases;
      this.purchasesDataSource.data = purchases;
    });
  }

  ngOnDestroy() {
    this.paymentMethodObserver.unsubscribe();
    this.purchaseObserver.unsubscribe();
  }

  public signOut() {
    this.auth.signOut();
  }

}
