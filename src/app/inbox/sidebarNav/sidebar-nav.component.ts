import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sidebar-nav',
    templateUrl: './sidebar-nav.component.html'
})
export class SidebarNavComponent {
    showCompose: boolean;
    @Output() activeMailbox = new EventEmitter();
    @Output() activeItemNav = new EventEmitter<number>();

    onMailboxSelected(arr: string[]) {
        this.activeMailbox.emit(arr);
    }

    onItemNav(id: number) {
        this.activeItemNav.emit(id);
    }
}