import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComposeService } from './compose.service';

@Component({
    selector: 'compose',
    templateUrl: './compose.component.html',
    providers: [ComposeService]
})
export class ComposeComponent {
    @Input() showCompose: boolean;
    @Input() activeMailbox: string[];
    @Output() onClose = new EventEmitter<Object>();

    constructor(private composeService: ComposeService) { }

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