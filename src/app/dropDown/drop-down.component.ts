import { Component } from '@angular/core';

@Component({
    selector: 'drop-down',
    templateUrl: './drop-down.component.html'
})
export class DropDownComponent {
    list: Object[] = [
        {
            name: 'Gmail',
            href: '/inbox'
        },
        {
            name: 'Users',
            href: '/users'
        },
        {
            name: 'Add new user',
            href: '/addUser'
        },
        {
            name: 'Add mailbox',
            href: '/addMailbox'
        }
    ];
}

