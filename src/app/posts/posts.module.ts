import { NgModule } from '@angular/core';
import { PostsServices } from './posts.services';
import { PostsComponent } from './posts.component';
import { CommonModule } from '@angular/common';

import { SpiningComponent } from '../shared/spining.component';


@NgModule({
    imports: [CommonModule],
    declarations: [
        PostsComponent,
        SpiningComponent],
    providers: [PostsServices]

})
export class PostsModule { }