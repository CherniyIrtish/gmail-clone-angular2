import { CONFIG } from 'app/configs/config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OpenedService {
  constructor(private http: Http) { }

  getMailById(id: string) {
    return this.http.get(`${CONFIG.apiBaseUrl}letters/${id}`)
      .map(response => response.json())
  }
}