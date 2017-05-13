import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

import { AppComponent } from './app.component';

import { NotFoundComponent } from './notfound.component';
import { HomeComponent } from './home.component';


import { Routing } from './app.routing';
import { usersRouting } from './users/user.routing';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UsersModule,
    PostsModule,
    usersRouting,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
