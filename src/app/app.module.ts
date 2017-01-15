import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarNavComponent } from './inbox/sidebarNav/sidebar-nav.component';
import { MailboxListComponent } from './inbox/sidebarNav/mailboxList/mailbox-list.component';
import { AddMailboxComponent } from './inbox/sidebarNav/mailboxList/addMailbox/add-mailbox.component';
import { DropDownComponent } from './dropDown/drop-down.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './inbox/compose/compose.component';
import { ListComponent } from './inbox/list/list.component';
import { MailComponent } from './inbox/list/mail/mail.component';
import { OpenedComponent } from './inbox/opened/opened.component';

import { SearchPipe } from './inbox/list/search.pipe';
import { TypeaheadDirective } from './inbox/compose/typeahead/typeahead.directive';
import { MailsService } from './inbox/mails.service';
import { MailboxService } from './inbox/mailbox.service';
// import { AuthGuardService } from './auth-guard.service';

const routes = [
  {
    path: '', component: InboxComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      // {
      //   path: 'inbox',
      //   component: ListComponent
      // },
      // {
      //   path: 'sent',
      //   component: ListComponent
      // },
      // {
      //   path: 'drafts',
      //   component: ListComponent
      // },
      {
        path: 'mail/:id',
        component: OpenedComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavComponent,
    MailboxListComponent,
    AddMailboxComponent,
    DropDownComponent,
    InboxComponent,
    ComposeComponent,
    ListComponent,
    MailComponent,
    OpenedComponent,
    SearchPipe,
    TypeaheadDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [MailsService, MailboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }