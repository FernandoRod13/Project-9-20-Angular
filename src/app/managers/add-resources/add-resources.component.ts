import { Component, OnInit, OnDestroy } from '@angular/core';
import { Supplier } from '../../models/supplier';
import { SupplierClientService } from './../../http/supplier-client.service';
import { ResourcesClientService } from './../../http/resource-client.service';
import { ResourceType } from './../../models/resources';
@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.css']
})
export class AddResourcesComponent implements OnInit, OnDestroy {
  public name: string;
  public description: string;
  public qty: number;
  public suppliers: Supplier[];
  public price: number;
  public keywords: string;
  public suppliersObserver;
  public resourceTypeObserver;
  public resourceTypes: ResourceType[];
  public selectedType: number;
  public selectedSupplier: number;


  constructor (
    private sup: SupplierClientService,
    private res: ResourcesClientService
     ) { }

  ngOnInit() {
    this.suppliersObserver = this.sup.getAllSuppliers().subscribe( list => {
      this.suppliers = list;
    });
    this.resourceTypeObserver = this.res.getAllResourceTypes().subscribe( list => {
      this.resourceTypes = list;
    });


  }

  ngOnDestroy() {
    this.suppliersObserver.unsubscribe();
    this.resourceTypeObserver.unsubscribe();
  }

  public submitNewResourceAvailable() {
    const body = {
      name: this.name,
      description: this.description,
      keywords: this.keywords,
      qty: this.qty,
      price: this.price,
      supplier_id: this.selectedSupplier,
      resource_type: this.selectedType
    };
    console.log(body);
    this.res.addNewResourceAvailable(body).then( data => {
      console.log(data);
    }).catch( error => {
      console.log(error);
    });
  }

}
