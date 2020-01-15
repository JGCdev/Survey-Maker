import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedService } from '../login/logged.service';
import { AuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

    constructor(private ls: LoggedService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.ls.isLogged() ? true : this.router.navigate(['login/acceso'],  { queryParams: { returnUrl: state.url }});
    }
}
