import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm = this._fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    rememberMe: [new FormControl(false)],
  });
  
  title = "Login";
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  message!:string;
  roles: string[] = [];
  booleanVariable: boolean = true;
  hide:boolean = true;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _tokenStorage: TokenStorageService,
    private _snackBar: MatSnackBar

  ) {}
  ngOnInit(): void {
    if (this._tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this._tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    if (!this.loginForm.invalid) {
      const { username, password } = this.loginForm.value;

      this._authService.login(username, password).subscribe(
        (data) => {
          console.log(data);
          this._tokenStorage.saveToken(data.token);
          this._tokenStorage.saveUser(data);
          
          this.message = data.message;
          this.isLoginFailed = false;
          this.isLoggedIn = true;

          this._snackBar.open("Logged In Success!", 'OK', {
            duration: 2000,
          });
          this.loginForm.reset();
          this._router.navigate(['/home']);
          // this.reloadPage();
        },
        (err) => {
          this.errorMessage = err.error;
          this.isLoginFailed = true;
          this.loginForm.reset();
          this._snackBar.open("error", 'OK', {
            duration: 2000,
          });
        }
      );
    }
  }
}
