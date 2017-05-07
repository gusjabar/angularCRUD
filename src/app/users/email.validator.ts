import { FormControl } from '@angular/forms';

export class EmailValidator {
    static Format(ctrl: FormControl) {
       

        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (ctrl.value && !EMAIL_REGEXP.test(ctrl.value))
            return { "invalid": true };
        return null;
    }

}