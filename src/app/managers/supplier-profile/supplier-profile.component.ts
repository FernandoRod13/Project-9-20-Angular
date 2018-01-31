import { Component, OnInit, Input } from '@angular/core';
import { SupplierClientService } from './../../http/supplier-client.service';
import { Supplier } from './../../models/supplier';
import { StatusMessageService } from './../../error-handling/status-message.service';
import { MatTableDataSource } from '@angular/material';
import { ResourcesClientService} from './../../http/resource-client.service';
import { ResourceAvaliable } from './../../models/resources';
@Component({
  selector: 'app-supplier-profile',
  templateUrl: './supplier-profile.component.html',
  styleUrls: ['./supplier-profile.component.css']
})
export class SupplierProfileComponent implements OnInit {
  public supplier: Supplier;
  @Input() accountID: number;
  private supplierID; number;
  public avaliableDisplayedRows = ['id', 'name', 'category', 'city', 'avaliable', 'price'];
  public availableDataSource = new MatTableDataSource<ResourceAvaliable>();
  public resourcesAvaliable: ResourceAvaliable[];

  constructor (
    private suppliers: SupplierClientService,
    private status: StatusMessageService,
    private resources: ResourcesClientService
  ) { }

  ngOnInit() {
    this.suppliers.getSupplierID(this.accountID).then( id => {
      this.supplierID = id;
      this.suppliers.getSupplierInfo(this.supplierID).then( sup => {
        console.log(sup);
        this.supplier = sup;
      }).catch( error => {
        this.status.error(error.message);
      });
      this.resources.getResourcesBySupplier(this.supplierID).then( resourceList => {
        this.resourcesAvaliable = resourceList;
        this.availableDataSource.data = this.resourcesAvaliable;
      }).catch( error => {
        this.status.error(error.message);
      });
    }).catch( error => {
      this.status.error(error.message);
    });
  }

}
