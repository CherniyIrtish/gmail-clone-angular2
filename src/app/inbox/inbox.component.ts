import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';
import { MailsService } from './mails.service';
import { MailboxService } from './mailbox.service';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router'
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
        private mailboxService: MailboxService,
        private router: Router) { }

    ngOnInit() {
        this.mailboxService.getSubject()
            .subscribe((activeMailbox) => {
                this.activeMailbox = activeMailbox;
            });
        this.router.events.subscribe((response) => {
            // console.log(this.router.routerState.snapshot);
            
            switch (response.url) {
                case '/':
                    this.mailsService.getInboxMails(this.activeMailbox);
                    break;
                case '/inbox':
                    this.mailsService.getInboxMails(this.activeMailbox);
                    break;
                case '/sent':
                    this.mailsService.getSentMails(this.activeMailbox);
                    break;
                case '/drafts':
                    this.mails = Observable.interval(0).map(i => this.drafts);
                    break;
            }
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
}