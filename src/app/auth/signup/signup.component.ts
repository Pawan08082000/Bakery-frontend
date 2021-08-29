import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm = this._fb.group({
    username: [null, Validators.required],
    password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    cnfPassword:[null, Validators.required],
    email: [null,  Validators.compose([Validators.required, Validators.email])]
  },{ validators: this.checkPasswords }
  );

  title="Register"
  hide = true;
  cnPassHide:boolean = true;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  message:string="";

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    
  }

  checkPasswords(group: FormGroup | any) { // here we have the 'passwords' group
    const password = group.get('password').value;
    const confirmPassword = group.get('cnfPassword').value;
  
    return password === confirmPassword ? null : { notSame: true }     
  }

  onSubmit(): void {
    if (!this.registerForm.invalid){
    const {
      username,
      password,
      email
    } = this.registerForm.value;
    this._auth
      .register(username, password,email)
      .subscribe(
        (data) => {
          this.message = data;
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this._snackBar.open(this.message, 'OK', {
            duration: 2000,
          });
          this._router.navigate(["/auth/login"])
          // this.registerForm.reset();
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          this._snackBar.open(this.errorMessage, 'OK', {
            duration: 2000,
          });
          this.registerForm.reset();
        }
      );
    }
  }

}
