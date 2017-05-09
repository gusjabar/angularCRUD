import { Router, RouterModule } from '@angular/router';

import { UsersComponent }       from './users.component';
import { UserFormComponent }    from './user-form.component';

import { PreventUnsavedChangesGuardServices } from './prevent-unsaved-changes-guard.service';

export const usersRouting = RouterModule.forChild([
    { path: 'users', component: UsersComponent },
    {
        path: 'new', 
        component: UserFormComponent,
        canDeactivate: [PreventUnsavedChangesGuardServices]
    },

])
