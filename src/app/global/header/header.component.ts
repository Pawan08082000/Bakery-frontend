import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  role!:string;
  @Input() deviceXs: any;
  
  constructor(public _tokenStorage: TokenStorageService,public _auth: AuthService, public _router : Router) {}

  ngOnInit(): void {
    if(this._auth.isLoggedIn()){
    this.role = this._tokenStorage.getUser().roles[0].roleType;
    }
  }

  logout() {
    this._auth.logout();
    this._router.navigate(['/auth/login']);
  }


}
