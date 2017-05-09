import { CanDeactivate }        from '@angular/router';
import { UserFormComponent }    from './user-form.component';
import { FormComponent }        from './formComponent';

export class PreventUnsavedChangesGuardServices implements CanDeactivate<FormComponent>{

    canDeactivate(component: FormComponent) {
        if (component.form.dirty)
            return confirm("Are you sure?")

        return true;
    }
}