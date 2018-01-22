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
  public displayedRows = ['id', 'name', 'email', 'phone', 'city'];
  public dataSource = new MatTableDataSource<Supplier>();
  private supplierObserver;
  constructor (private client: SupplierClientService) { }

  ngOnInit() {
    this.supplierObserver = this.client.getAllSuppliers().subscribe(supplierList => {
      this.suppliers = supplierList;
      this.dataSource.data = this.suppliers;
    });
  }

  ngOnDestroy() {
    this.supplierObserver.unsubscribe();
  }

}
