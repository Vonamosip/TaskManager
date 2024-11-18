import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) {}

onLogin(obj: any):any {
  return this.http.post("/api/Auth/SignIn",obj)
}

onRegister(obj: any):any {
  return this.http.post("/api/Auth/SignUp", obj);
}
}
