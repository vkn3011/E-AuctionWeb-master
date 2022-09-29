import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const formDataHeader = new HttpHeaders();
    const jsonHeader = new HttpHeaders({ 'Content-type': 'application/json,application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS,DELETE'});
    request = request.clone({
      withCredentials: false,
      headers: jsonHeader,
      url: `${environment.apiServer}${request.url}`
    });
    return next.handle(request);
  }
}
