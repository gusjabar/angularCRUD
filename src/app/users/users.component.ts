import { Component, Inject, OnInit } from '@angular/core';
import { UserServices } from './users.services';
import { User } from './user';


@Component({
    selector: 'users',
    templateUrl: 'users.template.html',

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

    deleteUser(user: User) {
         if (!confirm("Are you sure?"))
                    return;
        this._servicesUser
            .deleteUser(user.id)
            .subscribe(
            s => {               
                console.log("Delete", s);
                let index: number = this.users.indexOf(user);
                if (index !== -1) {
                    this.users.splice(index, 1);
                }

            },
            err => console.error(err)
            );
    }
}