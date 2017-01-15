import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ComposeService } from './compose.service';
import { MailboxService } from './../mailbox.service';

@Component({
    selector: 'compose',
    templateUrl: './compose.component.html',
    providers: [ComposeService]
})
export class ComposeComponent {
    @Input() showCompose: boolean;
    @Output() onClose = new EventEmitter<Object>();

    activeMailbox: string[];

    constructor(private composeService: ComposeService,
                private mailboxService: MailboxService) { }

    ngOnInit() {
        this.mailboxService.getSubject()
        .subscribe(activeMailbox => {
            this.activeMailbox = activeMailbox;
        });
    }

    onSubmit(mail) {
        this.composeService.send(this.convertToTransferObj(mail, this.activeMailbox[0]))
        .subscribe(respose => {
            // clear form
        },
        error => console.log(error));
    }

    convertToTransferObj(mail, id) {
        return {
            mailbox: id,
            to: mail.email,
            subject: mail.subject,
            body: mail.body
        }
    }

    close(mail) {
        mail.to = mail.email;
        this.onClose.emit(mail);
    }
}