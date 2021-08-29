import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HandleErrorService } from '../services/handle-error.service';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(
    private _error: HandleErrorService,
  ) {}
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // returning an observable to complete the request cycle
    return new Observable((observer) => {
      next.handle(req).subscribe(
        (res) => {
          if (res instanceof HttpResponse) {
            console.log("res is HttpResponse")
            observer.next(res);
          }
        },
        (err: HttpErrorResponse) => {
          this._error.handleError(err);
        }
      );
    });
  }
}
