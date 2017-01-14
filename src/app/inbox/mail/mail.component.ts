import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html'
})
export class MailComponent {
  @Input() mail: Object;
  @Input() toggleMail: boolean;
  @Output() onMailSelected = new EventEmitter<boolean>();

  public mailId: number;

  onMail(id: number): void {
    this.mailId = id;
    this.onMailSelected.emit(false);
  }
}
