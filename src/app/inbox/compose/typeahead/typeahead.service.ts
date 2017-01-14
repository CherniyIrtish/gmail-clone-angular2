import { Observable } from 'rxjs/Observable';
import { CONFIG } from './config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TypeaheadService {
  constructor(private http: Http) { }

  getList(): Observable<any> {
    return this.http.get(CONFIG.api)
    .map(mailboxes => mailboxes.json().map(data => data.title))
  }
}
