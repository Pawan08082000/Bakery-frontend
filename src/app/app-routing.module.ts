import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //this is for lazy loading
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    //this is for lazy loading
    path: 'home',
    loadChildren: () =>
      import('./global/global.module').then((m) => m.GlobalModule),
  },
  {
    //this is for lazy loading
    path: 'menu',
    loadChildren: () =>
      import('./menu/menu.module').then((m) => m.MenuModule),
  },
  {
    //this is for lazy loading
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
