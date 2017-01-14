import { CONFIG } from 'app/configs/config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MailboxService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get(CONFIG.apiBaseUrl + 'mailboxes')
      .map(response => response.json())
  }
}
