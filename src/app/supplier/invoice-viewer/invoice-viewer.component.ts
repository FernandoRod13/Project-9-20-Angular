import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionsClientService } from './../../http/transactions-client.service';
import { StatusMessageService } from './../../error-handling/status-message.service';
import { MatTableDataSource } from '@angular/material';
import { Purchase } from './../../models/purchases';
import { SupplierClientService } from './../../http/supplier-client.service';
import { AuthenticationService } from './../../authentication/authentication.service';
@Component({
  selector: 'app-invoice-viewer',
  templateUrl: './invoice-viewer.component.html',
  styleUrls: ['./invoice-viewer.component.css']
})
export class InvoiceViewerComponent implements OnInit, OnDestroy {

  public purchasesDataSource = new MatTableDataSource<Purchase>();
  public purchaseColumns = ['id', 'resource_name', 'purchasePrice', 'qty', 'requester', 'date'];
  private purchaseObserver;
  public purchaseList: Purchase[];
  public supplierName: string;

  constructor(
    private status: StatusMessageService,
    private transactions: TransactionsClientService,
    private supplier: SupplierClientService,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.supplierName = this.auth.currentUser.first_name + ' ' + this.auth.currentUser.last_name;
    this.supplier.getSupplierID(this.auth.currentUser.uid).then( id => {
      this.purchaseObserver = this.transactions.getSupplierTransactions(id).subscribe( data => {
        this.purchaseList = data;
        this.purchasesDataSource.data = data;
      });
    }).catch( error => {
      this.status.error(error.message);
    });
  }

  ngOnDestroy() {
    this.purchaseObserver.unsubscribe();
  }

}
