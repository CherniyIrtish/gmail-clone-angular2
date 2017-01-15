import { Component, Output, EventEmitter } from '@angular/core';
import { MailboxService } from './../../mailbox.service';

@Component({
    selector: 'mailbox-list',
    templateUrl: './mailbox-list.component.html',
    providers: [MailboxService]
})
export class MailboxListComponent {
    mailboxes: Object[];
    @Output() onMailboxSelected = new EventEmitter<any>();

    constructor(private mailboxService: MailboxService) { }

    ngOnInit() {
        this.mailboxService.getAll().subscribe((mailboxes) => {
            this.mailboxes = mailboxes;
            this.onMailboxSelected.emit([mailboxes[0]._id, mailboxes[0].title]);
        });
    }

    onMailbox(id: string, title: string): void {
        this.onMailboxSelected.emit([id, title]);
    }
}