import { Component, OnInit } from '@angular/core';
import { MailsService } from './../mails.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  mails: any[];

  constructor(private mailsService: MailsService) { }

  ngOnInit() {
    this.mailsService.getSubject()
      .subscribe((mails) => {
       this.mails = mails;
      });
  }
}