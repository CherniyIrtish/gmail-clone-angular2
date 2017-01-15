import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { SearchService } from './../../../search.service';

@Component({
    selector: 'userList',
    templateUrl: './userlist.component.html',
    providers:[ UsersService ]
})
export class UserListComponent implements OnInit {
    public users: Observable<any>;
    public search: string;

    constructor(private usersService: UsersService,
                private searchService: SearchService) { }

    ngOnInit() {
         this.users = this.usersService.getUsers();

        this.searchService.getSubject()
        .subscribe(search => {
            this.search = search;
        });
    }
}