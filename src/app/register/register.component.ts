import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { LocationClientService } from './../http/location-client.service';
import { City } from './../models/city';
import { AuthenticationService } from './../authentication/authentication.service';
import { StatusMessageService} from './../error-handling/status-message.service';
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
    private router: Router,
    private status: StatusMessageService
  ) { }

  ngOnInit() {
    this.cityListObserver = this.location.getAllCities().subscribe( cities => {
      this.cities = cities;
    });
  }

  ngOnDestroy() {
    this.cityListObserver.unsubscribe();
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
      this.status.success('Succesfuly Register a new user');
      if (this.accountType === 0) {
        this.router.navigate(['/admin/account']);
      }else if (this.accountType === 1) {
        this.router.navigate(['/supplier/account']);
      }else if (this.accountType === 2) {
        this.router.navigate(['/requester/account']);
      }
    }).catch(error => {
      this.status.error(error.message);
    });
  }

  public toLogin() {
    this.router.navigate(['/login']);
  }

}
