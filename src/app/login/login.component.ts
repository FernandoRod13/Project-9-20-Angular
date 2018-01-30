import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication/authentication.service';
import { Router } from '@angular/router';
import { StatusMessageService } from './../error-handling/status-message.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private status: StatusMessageService
  ) { }

  ngOnInit() {
  }

  public login() {
    this.auth.login(this.email, this.password).then( data => {
      console.log(data);
      if ( data.type === 'Requester') {
        this.status.success('Logged in succesfully!');
        this.router.navigate(['/requester/account']);
      } else if (data.type === 'Supplier' ) {
        this.status.success('Logged in succesfully!');
        this.router.navigate(['/supplier/account']);
      } else if (data.type === 'Administrator' ) {
        this.status.success('Logged in succesfully!');
        this.router.navigate(['/admin/account']);
      }else {
        this.status.error('Invalid account type');
      }
    }).catch(error => {
      this.status.error('Invalid credentials :(');
    });
  }

  public toRegister() {
    this.router.navigate(['/register']);
  }

}
