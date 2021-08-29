import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalModule } from './global/global.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServerErrorInterceptor } from './interceptor/server-error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { authInterceptorProviders } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-bottom-left",
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServerErrorInterceptor,
    multi:true
  // }, {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: LoaderInterceptor,
  //   multi: true,
  },
  authInterceptorProviders,
],
  bootstrap: [AppComponent]
})

export class AppModule { }
