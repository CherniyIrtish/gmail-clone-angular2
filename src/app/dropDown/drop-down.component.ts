import { Component } from '@angular/core';

@Component({
    selector: 'drop-down',
    templateUrl: './drop-down.component.html'
})
export class DropDownComponent {
    list: Object[] = [
        {
            name: 'Gmail',
            href: ''
        },
        {
            name: 'Add mailbox',
            href: ''
        }
    ];
}