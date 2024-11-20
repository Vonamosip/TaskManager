import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) { }

  public getProjects(obj:any):Observable<any>{
    return this.http.get<any>("/api/Project",obj);
  }

  public setProjects(obj:any):Observable<any>{
    return this.http.post<any>("/api/Project",obj);
  }

  public getProject(obj:any,id:string):Observable<any>{
    return this.http.get<any>(`/api/Project/${id}`,obj)
  }

  public chengeProject(obj:any,id:string):Observable<any>{
    return this.http.put<any>(`/api/Project/${id}`,obj)
  }

  public deleteProject(obj:any,id:string):Observable<any>{
    return this.http.delete<any>(`/api/Project/${id}`,obj)
  }
}
