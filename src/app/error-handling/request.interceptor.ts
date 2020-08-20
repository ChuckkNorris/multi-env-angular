import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
  
import { Observable, of, throwError } from 'rxjs';
import {tap, catchError, map } from 'rxjs/operators';
import { MessageService } from 'primeng/api'

  
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  
  constructor(
    private readonly messageService: MessageService
  ) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        console.warn('I caught an error!', err);
        if (err.status === 404) {
          this.messageService.add({
            summary: `ERROR: ${err.status}: ${err.statusText}`,
            data: 'data here',
            severity: 'Error',
            detail: 'Detail here'
          });
        }
        return throwError(err);
      })
    );
  }
}
