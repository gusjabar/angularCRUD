import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { EmailValidator } from './email.validator';

@Component({
    templateUrl: 'user-form.template.html'
   
})
export class UserFormComponent {
    userForm: FormGroup;

    constructor(fb: FormBuilder) {

        this.userForm = fb.group({
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
        console.log(this.userForm);
    }

}