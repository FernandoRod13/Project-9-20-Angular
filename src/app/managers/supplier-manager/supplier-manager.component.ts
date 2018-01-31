import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SupplierClientService} from './../../http/supplier-client.service';
import { Supplier } from './../../models/supplier';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-supplier-manager',
  templateUrl: './supplier-manager.component.html',
  styleUrls: ['./supplier-manager.component.css']
})
export class SupplierManagerComponent implements OnInit, OnDestroy {
  public suppliers: Supplier[];
  public displayedRows = ['id', 'name', 'email', 'phone', 'city', 'action'];
  public dataSource = new MatTableDataSource<Supplier>();
  private supplierObserver;
  public supplier_id: number;
  public showSupplier: boolean;
  constructor (private client: SupplierClientService) { }

  ngOnInit() {
    this.showSupplier = false;
    this.supplierObserver = this.client.getAllSuppliers().subscribe(supplierList => {
      this.suppliers = supplierList;
      this.dataSource.data = this.suppliers;
    });
  }

  ngOnDestroy() {
    this.supplierObserver.unsubscribe();
  }

  viewSupplier(id) {
    this.supplier_id = id;
    this.showSupplier = true;
  }

  hideSupplier() {
    this.supplier_id = -1;
    this.showSupplier = false;
  }

}
