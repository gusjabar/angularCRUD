import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';


import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './notfound.component';

export const Routing = RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'posts', component: PostsComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: NotFoundComponent }

])