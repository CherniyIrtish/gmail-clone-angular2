import { Observable } from 'rxjs/Rx';
import { CONFIG } from 'app/configs/config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ComposeService {

  constructor(private http: Http) { }

  send(mail: Object): Observable<any> {
    return this.http.post(CONFIG.apiBaseUrl + 'letters', mail);
  }
}
