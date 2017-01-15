import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarNavComponent } from './inbox/sidebarNav/sidebar-nav.component';
import { MailboxListComponent } from './inbox/sidebarNav/mailboxList/mailbox-list.component';
import { AddMailboxComponent } from './inbox/sidebarNav/mailboxList/addMailbox/addMailbox.component';
import { DropDownComponent } from './dropDown/drop-down.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './inbox/compose/compose.component';
import { ListComponent } from './inbox/list/list.component';
import { MailComponent } from './inbox/list/mail/mail.component';
import { OpenedComponent } from './inbox/opened/opened.component';
import { UsercardsComponent } from './inbox/usercards/usercards.component';
import { UserListComponent } from './inbox/usercards/userList/userList.component';
import { AvatarComponent } from './inbox/usercards/userList/avatar/avatar.component';
import { EditUserComponent } from './inbox/usercards/editUser/editUser.component';
import { AddUserComponent } from './inbox/usercards/addUser/addUser.component';

import { SearchPipe } from './inbox/list/search.pipe';
import { TypeaheadDirective } from './inbox/compose/typeahead/typeahead.directive';

import { MailsService } from './inbox/mails.service';
import { MailboxService } from './inbox/mailbox.service';
import { SearchService } from './search.service';
// import { AuthGuardService } from './auth-guard.service';

const routes = [
  {
    path: '',
    component: InboxComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'inbox',
        component: ListComponent,
      },
      {
        path: 'sent',
        component: ListComponent
      },
      {
        path: 'drafts',
        component: ListComponent
      },
      {
        path: 'addMailbox',
        component: AddMailboxComponent
      },
      {
        path: 'mail/:id',
        component: OpenedComponent
      },
      {
        path: '',
        component: UsercardsComponent,
        children: [
          {
            path: 'users',
            component: UserListComponent
          },
          {
            path: 'editUser',
            component: EditUserComponent
          },
          {
            path: 'addUser',
            component: AddUserComponent
          }
        ]
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
    TypeaheadDirective,
    UsercardsComponent,
    UserListComponent,
    AvatarComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [MailsService,
              MailboxService,
              SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }