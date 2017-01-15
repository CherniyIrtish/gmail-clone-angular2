import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
// import { UsersService } from './../users.service';

@Component({
    selector: 'addUser',
    templateUrl: './addUser.component.html',
    // providers:[ UsersService ]
})
export class AddUserComponent implements OnInit {
    // constructor(private usersService: UsersService) { }

    ngOnInit() {
        // this.users = this.usersService.getUsers();
    }
}