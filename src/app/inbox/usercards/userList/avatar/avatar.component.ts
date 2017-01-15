import { Component, Input } from '@angular/core';

@Component({
    selector: 'avatar',
    templateUrl: './avatar.component.html'
})
export class AvatarComponent {
    @Input() img: string;
}