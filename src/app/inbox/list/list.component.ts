import { Component, OnInit } from '@angular/core';
import { MailsService } from './../mails.service';
import { SearchService } from './../../search.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public mails: any[];
  public search: string;

  constructor(private mailsService: MailsService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getSubject().subscribe((search) => {
      this.search = search;
    });

    this.mailsService.getSubject()
    .subscribe((mails) => {
      this.mails = mails;
    });
  }
}