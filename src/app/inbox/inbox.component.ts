import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';
import { MailsService } from './mails.service';
import { MailboxService } from './mailbox.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/from";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/map";

@Component({
    selector: 'inbox',
    templateUrl: './inbox.component.html'
})
export class InboxComponent implements OnInit {
    showCompose: boolean = false;
    activeMailbox: string[] = ['57c852eb6baa8d7d1bfe685d', 'darvin@gmail.com'];

    mails: Observable<any>;
    drafts: any[] = [];

    constructor(private mailsService: MailsService,
                private route: ActivatedRoute,
                private mailboxService: MailboxService) { }

    ngOnInit() {
        this.mailboxService.getSubject()
            .subscribe((activeMailbox) => {
                this.activeMailbox = activeMailbox;
            });
    }

    onCompose(): void {
        this.showCompose = true;
    }

    onClose(mail: Object): void {
        if (mail['email']) {
            mail['_id'] = this.drafts.length;
            this.drafts.push(mail)
        };
        this.showCompose = false;
    }

    onMailboxSelected(activeMailbox: string[]): void {
        this.mailboxService.getSubject().next(activeMailbox);
        this.mailsService.getInboxMails(this.activeMailbox);
    }

    onItemNavSelected(id: number): void {
        switch (id) {
            case 1:
                this.mailsService.getInboxMails(this.activeMailbox);
                break;
            case 2:
                this.mailsService.getSentMails(this.activeMailbox);
                break;
            case 3:
                this.mails = Observable.interval(0).map(i => this.drafts);
                break;
        }
    }
}