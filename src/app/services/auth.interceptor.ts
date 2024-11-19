
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';


import { MonoTypeOperatorFunction, Observable, tap } from 'rxjs';
import { PersistenceService } from './persistence.service';
import { AuthTokensEnum } from '../shared/enums/auth-tokens.enum';


const handleAuthError = (): MonoTypeOperatorFunction<any> => tap(
  () => {},
  err => {
    if (err.status === 401) {
     alert("Unauthorized")
    }
  }
);

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor {
  constructor(private readonly persistence: PersistenceService) { }

  private createRequest(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.persistence.getToken(AuthTokensEnum.ACCESS_TOKEN);
    const refreshToken = this.persistence.getToken(AuthTokensEnum.REFRESH_TOKEN);

    if(!accessToken || !refreshToken || this.persistence.isTokenExpired(refreshToken)) {
      return next.handle(request);
    }

    request = this.createRequest(request, accessToken);

    if(this.persistence.isTokenExpired(accessToken)) {

      return next.handle(request).pipe(
        handleAuthError()
      );
    }

    request = this.createRequest(request, accessToken);

    return next.handle(request).pipe(
      handleAuthError()
    );
  }
}
