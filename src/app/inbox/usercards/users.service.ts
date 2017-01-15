import { Observable } from 'rxjs/Observable';
import { CONFIG } from 'app/configs/config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUsers(): Observable<any[]> {
    return this.http.get(CONFIG.apiBaseUrl + 'users')
      .map(response => response.json());
  }
}