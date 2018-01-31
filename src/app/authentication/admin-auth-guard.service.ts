import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private auth: AuthenticationService,
    private router: Router
   ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLoggedIn(state.url);
  }

  private checkLoggedIn(url: string): boolean {
    if (this.auth.loggedIn()) {
      if (this.auth.currentUser.type === 'Administrator') {
        return true;
      }else {
        this.router.navigate(['/invalid-permissions']);
        return false;
      }
    }
    this.auth.setRedirect(url);
    this.router.navigate(['/login']);
    return false;
  }

}
