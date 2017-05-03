import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

import { AppComponent } from './app.component';

import { NotFoundComponent } from './notfound.component';
import { HomeComponent } from './home.component';

import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    PostsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
