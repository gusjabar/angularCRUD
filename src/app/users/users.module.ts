import { NgModule }                             from '@angular/core';
import { CommonModule }                         from '@angular/common';

import { ReactiveFormsModule }                  from '@angular/forms'

import { UsersComponent }                       from './users.component';
import { UserFormComponent }                    from './user-form.component';

import { UserServices }                         from './users.services';
import { PreventUnsavedChangesGuardServices }   from './prevent-unsaved-changes-guard.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        UsersComponent,
        UserFormComponent],
    providers: [
        UserServices,
        PreventUnsavedChangesGuardServices]
})
export class UsersModule { }