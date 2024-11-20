import { Injectable, inject } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { ISignUpRequest } from '../shared/interfaces/signUp.interface';
import { ISignInSuccessResponse } from '../shared/interfaces/SignInSuccessResponse.interface';
import { Observable } from 'rxjs/internal/Observable';
import { ISignUpSuccessResponse } from '../shared/interfaces/SignUpSuccessResponse.interface';
import { ISignInRequest } from '../shared/interfaces/signIn.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient, private readonly handler: HttpBackend) {}

 public onLogin(obj: ISignInRequest):Observable<ISignInSuccessResponse> {
  return this.http.post<ISignInSuccessResponse>("/api/Auth/SignIn",obj)
 }

 public onRegister(obj: ISignUpRequest): Observable<ISignUpSuccessResponse> {
  return this.http.post<ISignUpSuccessResponse>("/api/Auth/SignUp",obj);
 }

 public refreshTokens(refreshToken: string): Observable<any> {
  const http: HttpClient = new HttpClient(this.handler);

  return http.get<any>(`/api/Auth/refresh-tokens`, {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${refreshToken}`
    })
  });
}
}
