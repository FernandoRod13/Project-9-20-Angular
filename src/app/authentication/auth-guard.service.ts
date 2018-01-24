import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthenticationService,
    private router: Router
   ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLoggedIn(state.url);
  }

  private checkLoggedIn(url: string): boolean {
    if (this.auth.loggedIn()) {
      return true;
    }
    this.auth.setRedirect(url);
    this.router.navigate(['/login']);
    return false;
  }

}
