import { CONFIG } from 'app/configs/config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MailsService {
  constructor(private http: Http) { }

  getAllByMailboxId(id: string) {
    return this.http.get(CONFIG.apiBaseUrl + 'letters')
      .map(response => response.json().filter((mail: any) => mail.mailbox == id))
  }

  getInboxMails(activeMailbox: string[]) {
    return this.http.get(CONFIG.apiBaseUrl + 'letters')
      .map(response => response.json().filter((mail: any) => {
        return (mail.to == activeMailbox[1]);
      }))
  }

  getSentMails(activeMailbox: string[]) {
    return this.http.get(CONFIG.apiBaseUrl + 'letters')
      .map(response => response.json().filter((mail: any) => {
        return (mail.mailbox == activeMailbox[0]);
      }))
  }

  deleteMail(mailId) {
    this.http.delete(CONFIG.apiBaseUrl + 'letters/' + mailId).subscribe(response => {},
     error => console.log('Could not delete mail.'));
  }
}