import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl!: string;

  constructor(private _http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this._http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, password: string,email:string): Observable<any> {
    return this._http.post(AUTH_API + 'register', {
      username,
      password,
      email
    }, httpOptions);
  }

  logout() {
    localStorage.removeItem('auth-user');
    localStorage.removeItem('auth-token');
  }

  isLoggedIn() {
    if (localStorage.getItem('auth-user') && localStorage.getItem('auth-token')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('auth-token') ||'{}');
    return currentUser.token;
  }
}
