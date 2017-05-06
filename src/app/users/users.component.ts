import { Component, Inject, OnInit } from '@angular/core';
import { UserServices } from './users.services';
import { User } from './user';

@Component({
    selector: 'users',
    templateUrl: 'users.template.html'
})
export class UsersComponent implements OnInit {
    users: User[];
    _servicesUser: UserServices
    constructor(private servicesUser: UserServices) {
        this._servicesUser = servicesUser;
    }
    ngOnInit() {
        this._servicesUser
            .getUser()
            .subscribe(s => {
                
                this.users = s;
                console.log(this.users);
            });
            
    }
}