import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication/authentication.service'; 
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login() {
    this.auth.login(this.email, this.password).subscribe( admin => {
      console.log(admin);
      if (admin) {
        const redirect = this.auth.redirect();
        if (redirect) {
          this.router.navigate([redirect]);
        }else {
          this.router.navigate(['/admin']);
        }
      }else {
        console.log('failed');
      }
    });
  }

  public toRegister() {
    console.log('yes');
    this.router.navigate(['/register']);
  }

}
