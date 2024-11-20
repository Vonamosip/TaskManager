import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private readonly http: HttpClient) { }

  public getTasks(obj:any,projectId:string):Observable<any>{
    return this.http.get<any>(`/api/Task/${projectId}`,obj);
  }

  public setTasks(obj:any,projectId:string):Observable<any>{
    return this.http.post<any>(`/api/Task/${projectId}`,obj);
  }

  public getTask(obj:any,projectId:string,taskId:string):Observable<any>{
    return this.http.get<any>(`/api/Task/${projectId}/${taskId}`,obj)
  }

  public chengeTask(obj:any,projectId:string,taskId:string):Observable<any>{
    return this.http.put<any>(`/api/Task/${projectId}/${taskId}`,obj)
  }

  public deleteTask(obj:any,projectId:string,taskId:string):Observable<any>{
    return this.http.delete<any>(`/api/Task/${projectId}/${taskId}`,obj)
  }
}
