import { Component, Inject, OnInit }    from '@angular/core';
import { UserServices }                 from './users.services';
import { User }                         from './user';

@Component({
    selector: 'users',
    templateUrl: 'users.template.html'
})
export class UsersComponent implements OnInit {
    _servicesUser: UserServices
    users: User[];
    

    constructor(private servicesUser: UserServices) {
        this._servicesUser = servicesUser;       
    }
    ngOnInit() {
        this._servicesUser
            .getUser()
            .subscribe(s => this.users = s);

    }
}