import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from './../../authentication/authentication.service';
import { TransactionsClientService } from './../../http/transactions-client.service';
import { User } from './../../models/user';
import { PaymentMethod } from '../../models/paymentMethod';
import { MatTableDataSource } from '@angular/material';
import { Purchase } from '../../models/purchases';
import { StatusMessageService } from './../../error-handling/status-message.service';
@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.css']
})
export class AccountManagerComponent implements OnInit, OnDestroy {
  public user: User;
  private paymentMethodObserver;
  public paymentMethods: PaymentMethod[];
  public paymentMethodDataSource =  new MatTableDataSource<PaymentMethod>();
  public paymenMethodColumns = ['id', 'cardHolder', 'cardNumber', 'zip', 'date'];
  public password: string;
  public confirmPassword: string;
  public showResetpassword: boolean;
  public newCard: PaymentMethod;
  public showNewCardForm: boolean;
  public latitude: number;
  public longitude;

  constructor(
    private auth: AuthenticationService,
    private transactions: TransactionsClientService,
    private status: StatusMessageService
  ) { }

  ngOnInit() {
    this.showResetpassword = false;
    this.showNewCardForm = false;
    this.newCard = PaymentMethod.emptyCard();
    this.user = this.auth.currentUser;
    this.latitude = this.auth.currentUser.latitude;
    this.longitude = this.auth.currentUser.longitude;
    this.paymentMethodObserver = this.transactions.getUserPaymetMethod(this.user.uid).subscribe( cards => {
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
  public changePassword() {
    if ( this.password.length > 4 && this.password === this.confirmPassword) {
      this.auth.changePassword(this.user.email, this.password).then(() => {
        this.hideResetPass();
        this.status.success('Successfuly changed password!');
      }).catch(error => {
        this.status.error(error.message);
      });
    } else {
      this.status.error('Error: assowrds dont match or password length less than 4.');
    }
  }

  public showResetPass() {
    this.showResetpassword = true;

  }

  public hideResetPass() {
    this.showResetpassword = false;
  }

  public showNewCard() {
    this.showNewCardForm = true;
    this.newCard = PaymentMethod.emptyCard();
  }

  public hideNewCard() {
    this.showNewCardForm = false;
  }

  public addNewCard() {
    this.transactions.addNewPaymentMethod(this.newCard, this.user.uid).then( card => {
      this.status.success('Successfuly added new payment method.');
      this.hideNewCard();
      this.paymentMethods.push(card);
    }).catch( error => {
      console.log(error);
      this.status.error('Failed to add payment method.');
    });
  }

}
