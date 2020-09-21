import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './IUser';
import { Observable } from 'rxjs'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(environment.url)
  }
}
