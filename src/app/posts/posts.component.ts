import { Component, Inject, OnInit } from '@angular/core';

import { PostsServices } from './posts.services';
import { Post } from './post';
import { PostComments } from './post-comment';

import { SpiningComponent } from '../shared/spining.component';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
    styles: [`
      .li-post{
        cursor: pointer;
      }
      .media-object{
          border-radius: 50%;
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
    isLoadingComments: boolean = false;

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
    onClick_Post(post: Post) {
        this.isLoadingComments = true;
       
        this._service
            .GetPost(post.id)
            .subscribe(
            s => this.post = s
            );
        this._service
            .GetComments(post)
            .subscribe(
            s => {
                console.log("comments", s)
                this.isLoadingComments = false;
                this.post.comments = s;
            }
            )

        return false;
    }

}