import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionsClientService } from './../../http/transactions-client.service';
import { StatusMessageService } from './../../error-handling/status-message.service';
import { MatTableDataSource } from '@angular/material';
import { Purchase } from './../../models/purchases';
@Component({
  selector: 'app-transactions-viewer',
  templateUrl: './transactions-viewer.component.html',
  styleUrls: ['./transactions-viewer.component.css']
})
export class TransactionsViewerComponent implements OnInit, OnDestroy {
  public purchasesDataSource = new MatTableDataSource<Purchase>();
  public purchaseColumns = ['id', 'resource_name', 'purchasePrice', 'qty', 'supplier', 'date'];
  private purchaseObserver;
  public purchaseList: Purchase[];

  constructor(
    private status: StatusMessageService,
    private transactions: TransactionsClientService
  ) { }

  ngOnInit() {
    this.purchaseObserver = this.transactions.getAllTransactions().subscribe( data => {
      this.purchaseList = data;
      this.purchasesDataSource.data = data;
    });
  }

  ngOnDestroy() {
    this.purchaseObserver.unsubscribe();
  }

}
