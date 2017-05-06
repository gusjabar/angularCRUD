import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserServices } from './users.services';

@NgModule({
    imports: [CommonModule],
    declarations: [UsersComponent],
    providers: [UserServices]
})
export class UsersModule { }