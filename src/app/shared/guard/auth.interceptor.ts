import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private httpXsrfTokenExtractor: HttpXsrfTokenExtractor
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.setAuthorizationHeader(req))
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        this.requestSuccess(event);
                    }
                }),
                catchError((error) => {
                    return this.catchError(error);
                })
            );
    }

    private setAuthorizationHeader(req: HttpRequest<any>): HttpRequest<any> {
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + authToken) });
        }
        return req;
    }

    private requestSuccess(res: any) {
        return res.body;
    }

    private catchError(error: any) {
        return throwError(error.message);
    }
}
