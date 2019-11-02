import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user.model'
import { fromEventPattern } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "http://jsonplaceholder.typicode.com/users"
  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<User[]>(this.apiUrl)
  }
}
