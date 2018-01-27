import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { LocationClientService } from './../http/location-client.service';
import { City } from './../models/city';
import { AuthenticationService } from './../authentication/authentication.service';
import { RouteConfigLoadStart } from '@angular/router/src/events';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public email: string;
  public password: string;
  public city: City;
  public firstName: string;
  public lastName: string;
  public cities: City[];
  public address: string;
  public phone: string;
  public selectedCity: number;
  public accountType: number;
  private cityListObserver;

  public accountTypes = [
    { typeName: 'Admin', typeValue: 0 },
    { typeName: 'Supplier', typeValue: 1 },
    { typeName: 'Requester', typeValue: 2 }
  ];
  constructor (
    private location: LocationClientService,
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cityListObserver = this.location.getAllCities().subscribe( cities => {
      this.cities = cities;
    });
  }

  ngOnDestroy() {
    this.cityListObserver.unsubcribe();
  }

  public register() {
    const body = {
      email: this.email,
      last_name: this.lastName,
      first_name: this.firstName,
      password: this.password,
      city_id: this.selectedCity,
      address: this.address,
      phone: this.phone,
      latitude: 0.0000,
      longitud: 0.0000
    };
    this.auth.register(this.accountType, body).then(() => {
      this.router.navigate(['/admin/resources']);
    });
  }

}