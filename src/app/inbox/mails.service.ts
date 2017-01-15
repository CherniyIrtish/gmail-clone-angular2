import { Observable } from 'rxjs/Observable';
import { CONFIG } from 'app/configs/config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MailsService {
  subject: Subject<string[]> = new Subject();

  constructor(private http: Http) { }

  getSubject(): Subject<string[]> {
    return this.subject;
  }

  getInboxMails(activeMailbox: string[]) {
    this.http.get(CONFIG.apiBaseUrl + 'letters')
      .map(response => response.json().filter((mail: any) => {
        return (mail.to == activeMailbox[1]);
      }))
      .subscribe((mails) => {
        this.subject.next(mails);
      });
  }

  getSentMails(activeMailbox: string[]) {
    return this.http.get(CONFIG.apiBaseUrl + 'letters')
      .map(response => response.json().filter((mail: any) => {
        return (mail.mailbox == activeMailbox[0]);
      }))
      .subscribe(mails => {
        this.subject.next(mails);
      });
  }

  deleteMail(mailId) {
    this.http.delete(CONFIG.apiBaseUrl + 'letters/' + mailId).subscribe(response => { },
      error => console.log('Could not delete mail.'));
  }
}