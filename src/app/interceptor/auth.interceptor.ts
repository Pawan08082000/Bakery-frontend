import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _token: TokenStorageService,private _authService : AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("inside interceptor");
    if (this._authService.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this._token.getToken()}`
        }
      }); 
      console.log(request);
    }
    return next.handle(request);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
