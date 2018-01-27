import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from './../../authentication/authentication.service';
import { TransactionsClientService } from './../../http/transactions-client.service';
import { User } from './../../models/user';
import { PaymentMethod } from '../../models/paymentMethod';
import { MatTableDataSource } from '@angular/material';
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

  constructor(
    private auth: AuthenticationService,
    private transactions: TransactionsClientService
  ) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
    this.paymentMethodObserver = this.transactions.getUserPaymetMethod(this.user.uid).subscribe( cards => {
      console.log(cards);
      this.paymentMethods = cards;
      this.paymentMethodDataSource.data = cards;
    });
  }

  ngOnDestroy() {
    this.paymentMethodObserver.unsubscribe();
  }

  public signOut() {
    this.auth.signOut();
  }

}
