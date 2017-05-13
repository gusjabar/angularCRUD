import { Component, Inject, OnInit } from '@angular/core';

import { PostsServices } from './posts.services';
import { Post } from './post';

import { SpiningComponent } from '../shared/spining.component';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
    styles: [`
      .li-post{
        cursor: pointer;
      }  
    `],
    selector: 'posts',
    templateUrl: 'posts.template.html'

})
export class PostsComponent implements OnInit {
    private _service: PostsServices;
    posts: Post[];
    post: Post;
    isLoading: boolean = false;

    constructor(private service: PostsServices) {
        this._service = service;
    }

    ngOnInit() {
        this.isLoading = true;

        this.service
            .GetPosts()
            .subscribe(
            s => {
                this.isLoading = false;
                this.posts = s;

            },
            err => console.error(err));
    }
    onClick_Post( post: Post) {
       
        this._service
            .GetPost(post.id)
            .subscribe(
            s => this.post = s
            );
        return false;
    }

}