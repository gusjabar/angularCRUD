import { Component, Inject }                    from '@angular/core';
import { Router}                                from '@angular/router';
import { FormGroup, FormBuilder, Validators }   from '@angular/forms';

import { EmailValidator }                       from './email.validator';

import * as Rx                                  from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { UserServices }                         from './users.services';

import { User }                                 from './user';

@Component({
    templateUrl: 'user-form.template.html'

})
export class UserFormComponent {

    form: FormGroup;
    private _user: User;
    private _services: UserServices;
    private _saveResponse;
    private _router: Router;

    constructor(fb: FormBuilder
        , services: UserServices
        , router: Router) {

        this.form = fb.group({
            userName: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                EmailValidator.Format
            ])],
            address: fb.group({
                street: [''],
                suite: [''],
                city: [''],
                zipcode: ['']
            })
        });
        this._router = router;
        this._services = services;
    }
    onSubmit() {
        this._user = this.form.value;
        console.log("user will be save",this._user);
        this._services
            .saveUser(this._user)
            .subscribe(s => 
                        {
                            this._saveResponse = s;
                            console.log("Save", this._saveResponse);
                            this.form.markAsPristine();
                            //this.form.reset();
                            this._router.navigate(['users'])
                        });
        
    }

}