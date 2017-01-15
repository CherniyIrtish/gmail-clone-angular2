import { CONFIG } from 'app/configs/config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MailboxService {
  subject: Subject<string[]> = new Subject();

  constructor(private http: Http) { }

  getSubject(): Subject<string[]> {
    return this.subject;
  }

  getAll() {
    return this.http.get(CONFIG.apiBaseUrl + 'mailboxes')
      .map(response => response.json())
  }
}