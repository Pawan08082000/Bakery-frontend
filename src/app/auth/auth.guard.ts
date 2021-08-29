import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string) {
    console.log("inside checkLogin");
    if (this._authService.isLoggedIn()) {
      return true;
    }
    this._authService.redirectUrl = url;

    this._router.navigate(['/auth/login'], { queryParams: { returnUrl: url } });
    return false
  }
}
