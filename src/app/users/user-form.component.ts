import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EmailValidator } from './email.validator';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { UserServices } from './users.services';

import { User } from './user';

@Component({
    templateUrl: 'user-form.template.html'

})
export class UserFormComponent implements OnInit {

    title = "Add new user";
    form: FormGroup;
    private _fb: FormBuilder;
    private _user: User;
    private _services: UserServices;
    private _saveResponse;
    private _router: Router;
    private _route: ActivatedRoute;

    constructor(fb: FormBuilder
        , services: UserServices
        , router: Router
        , route: ActivatedRoute) {
        this._fb = fb;
        this._router = router;
        this._services = services;
        this._route = route;
    }

    ngOnInit() {
        
         this._route.params.subscribe(
            params => {
                this._services
                    .getUserId(+params['id'])
                    .subscribe(
                    (user: User) => {
                        this.title = "Edit user " + user.name;
                        this.form.patchValue({
                            userName: user.name,
                            email: user.email,
                            phone: user.phone,
                            address: {
                                street: user.address.street,
                                suite: user.address.suite,
                                city: user.address.city,
                                zipcode: user.address.zipcode
                            }
                        })
                        console.log("edit", user)
                    }
                    );
            }
        );


        this.form = this._fb.group({
            userName: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                EmailValidator.Format
            ])],
            phone: [''],
            address: this._fb.group({
                street: [''],
                suite: [''],
                city: [''],
                zipcode: ['']
            })
        });
    }

    onSubmit() {
        this._user = this.form.value;
        console.log("user will be save", this._user);
        this._services
            .saveUser(this._user)
            .subscribe(s => {
                this._saveResponse = s;
                console.log("Save", this._saveResponse);
                this.form.markAsPristine();
                this._router.navigate(['users'])
            });

    }

}