import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResourcesClientService } from './../../http/resource-client.service';
import { ResourceAvaliable } from './../../models/resources';
import { TransactionsClientService } from './../../http/transactions-client.service';
import { StatusMessageService } from './../../error-handling/status-message.service';
import { MatTableDataSource } from '@angular/material';
import { AuthenticationService } from './../../authentication/authentication.service';
import { Purchase } from '../../models/purchases';
import { RequestersClientService } from './../../http/requesters-client.service';
@Component({
  selector: 'app-buy-resource',
  templateUrl: './buy-resource.component.html',
  styleUrls: ['./buy-resource.component.css']
})
export class BuyResourceComponent implements OnInit, OnDestroy {
  public resourceObserver;
  public resourcesAvailable: ResourceAvaliable[];
  public selectedResource: ResourceAvaliable;
  public amount: number;
  public purchasesDataSource = new MatTableDataSource<Purchase>();
  public purchaseColumns = ['id', 'resource_name', 'purchasePrice', 'qty', 'supplier', 'date'];
  private purchaseObserver;
  public purchaseList: Purchase[];
  public showPurchaseForm: boolean;

  constructor(
    private resources: ResourcesClientService,
    private transactions: TransactionsClientService,
    private status: StatusMessageService,
    private auth: AuthenticationService,
    private requesters: RequestersClientService
  ) { }

  ngOnInit() {
    this.showPurchaseForm = false;
    this.resourceObserver = this.resources.getAllResourcesAvailable().subscribe( list => {
      this.resourcesAvailable = list;
    });

    this.purchaseObserver = this.transactions.getBuyerPurchaces(this.auth.currentUser.uid).subscribe( purchases => {
      this.purchaseList = purchases;
      this.purchasesDataSource.data = purchases;
    });

  }

  ngOnDestroy() {
    this.resourceObserver.unsubscribe();
    this.purchaseObserver.unsubscribe();
  }

  public purchase() {
    this.requesters.getRequesterID(this.auth.currentUser.uid).then( id => {
      if (this.selectedResource.available >= this.amount && this.amount > 0) {
        this.transactions.purchaseResource(this.amount, this.selectedResource.resource_id, id).then(() => {
          this.status.success('Successfuly purchased a resource');
          this.hidePurchase();
        }).catch(error => {
          this.status.error('Unsucessfully Purchased resource.');
        });
      }else {
        this.status.error('Error: Insufficient resources for this purchase.');
      }
    }).catch(error => {
      this.status.error(error.message);
    });
  }

  public showPurchase() {
    this.showPurchaseForm = true;
  }

  public hidePurchase() {
    this.showPurchaseForm = false;
  }

}
