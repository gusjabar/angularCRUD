import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms'

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';

import { UserServices } from './users.services';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        UsersComponent,
        UserFormComponent],
    providers: [UserServices]
})
export class UsersModule { }