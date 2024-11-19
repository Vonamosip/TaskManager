import { Injectable, inject } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpRequest } from '../shared/interfaces/signUp.interface';
import { SignInSuccessResponse } from '../shared/interfaces/SignInSuccessResponse.interface';
import { Observable } from 'rxjs/internal/Observable';
import { SignUpSuccessResponse } from '../shared/interfaces/SignUpSuccessResponse.interface';
import { SignInRequest } from '../shared/interfaces/signIn.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient, private readonly handler: HttpBackend) {}

 public onLogin(obj: SignInRequest):Observable<SignInSuccessResponse> {
  return this.http.post<SignInSuccessResponse>("/api/Auth/SignIn",obj)
 }

 public onRegister(obj: SignUpRequest): Observable<SignUpSuccessResponse> {
  return this.http.post<SignUpSuccessResponse>("/api/Auth/SignUp",obj);
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
