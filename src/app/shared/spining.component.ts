import { Component, Input } from '@angular/core';
@Component({
    selector: 'spining',
    template: `
            <div [hidden]=!isLoading>
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                <span class="sr-only">Loading...</span>
            </div>            
            `,
    inputs: ['isLoading:is-loading']
})
export class SpiningComponent {
    @Input('is-loading') isLoading: boolean = false;
}