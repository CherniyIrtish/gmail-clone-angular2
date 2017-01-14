import { Component, Input } from '@angular/core';
import { MailsService } from './mails.service';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/from";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/map";

@Component({
    selector: 'inbox',
    templateUrl: './inbox.component.html',
    providers: [MailsService]
})
export class InboxComponent {
    @Input() search: string;
    showCompose: boolean = false;
    activeMailbox: string[];

    mails: Observable<any>;
    drafts: Object[] = [];
    toggleMail: boolean = true;

    constructor(private mailsService: MailsService) { }

    ngOnInit() {
        this.mails = this.mailsService.getAllByMailboxId('57c852eb6baa8d7d1bfe685d');
    }

    onCompose(): void {
        this.showCompose = true;
    }

    onClose(mail: Object): void {
        if (mail['email']){  
            mail['_id'] = this.drafts.length;
            this.drafts.push(mail) 
        };
        this.showCompose = false;
    }

    onMailSelected(value: boolean): void {
        this.toggleMail = value;
    }

    onMailboxSelected(activeMailbox: string[]): void {
        this.activeMailbox = activeMailbox;
        this.mails = this.mailsService.getInboxMails(this.activeMailbox);

        this.toggleMail = true;
    }

    onItemNavSelected(id: number): void {
        switch (id) {
            case 1:
                this.mails = this.mailsService.getInboxMails(this.activeMailbox);
                break;
            case 2:
                this.mails = this.mailsService.getSentMails(this.activeMailbox);
                break;
            case 3:
                this.mails = Observable.interval(0).map(i => this.drafts);
                break;
        }

        this.toggleMail = true;
    }
}