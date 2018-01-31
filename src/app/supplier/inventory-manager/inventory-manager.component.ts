import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../authentication/authentication.service';
@Component({
  selector: 'app-inventory-manager',
  templateUrl: './inventory-manager.component.html',
  styleUrls: ['./inventory-manager.component.css']
})
export class InventoryManagerComponent implements OnInit {
  private id: number;
  constructor (
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    console.log(this.auth.currentUser.uid);
    this.id = this.auth.currentUser.uid;
  }

}
