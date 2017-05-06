import { Router, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';

export const usersRouting = RouterModule.forChild([
    { path: 'users', component: UsersComponent },
    { path: 'new', component: UserFormComponent }
])
