import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenedService } from './opened.service';

@Component({
  selector: 'opened',
  templateUrl: './opened.component.html',
  providers: [OpenedService]
})
export class OpenedComponent implements OnInit {
  public mail: any = {};

  constructor(private route: ActivatedRoute,
              private openedService: OpenedService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.openedService.getMailById(params['id'])
        .subscribe((mail) => {
          this.mail = mail;
        });
    });
  }
}
