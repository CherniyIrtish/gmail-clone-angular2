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
import { MailComponent } from './inbox/mail/mail.component';
import { OpenedComponent } from './inbox/opened/opened.component';

import { SearchPipe } from './inbox/search.pipe';
import { TypeaheadDirective } from './inbox/compose/typeahead/typeahead.directive';

const routes = [
  {path: '', component: MailComponent,
    children: [
      { path: 'mail/:id', component: OpenedComponent }
    ]
  },
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
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
