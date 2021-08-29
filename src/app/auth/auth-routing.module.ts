import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'', 
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'signup',
        component: SignupComponent,
        // canActivate: [AuthGuard],
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
