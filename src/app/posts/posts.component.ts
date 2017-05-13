import { Component, Inject, OnInit } from '@angular/core';

import { PostsServices } from './posts.services';
import { UserServices } from '../users/users.services';

import { Post } from './post';
import { PostComments } from './post-comment';
import { User } from '../users/user';

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
    private _postService: PostsServices;
    private _userService: UserServices;

    posts: Post[];
    post: Post;

    users: User[];
    user: User;

    isPostLoading: boolean = false;
    isCommentsLoading: boolean = false;
    isUserLoading: boolean = false;

    constructor(private postService: PostsServices,
        private userSerivice: UserServices) {
        this._postService = postService;
        this._userService = userSerivice;
    }

    ngOnInit() {
        this._LoadUsers();
        this._LoadAllPosts();

    }
    onClick_Post(post: Post) {
        this.isCommentsLoading = true;

        this._postService
            .GetPost(post.id)
            .subscribe(
            s => this.post = s
            );
        this._postService
            .GetComments(post)
            .subscribe(
            s => {
                console.log("comments", s)
                this.isCommentsLoading = false;
                this.post.comments = s;
            }
            )

        return false;
    }
    onChange_SelectUser(filter) {
        this.posts = null;
        
        console.log("selected user")
        console.log(filter.userId);
        this._postService
            .GetPostsByUser(filter.userId)
            .subscribe(
            s => {
                console.log(s)
                this.isPostLoading = false;
                this.posts = s;
            },
            err => console.error(err));
    }

    private _LoadUsers() {
        this.isUserLoading = true;
        this._userService
            .getUser()
            .subscribe(
            s => {
                this.isUserLoading = false;
                this.users = s;
            },
            err => console.log(err))
    }

    private _LoadAllPosts() {
        this.isPostLoading = true;
        this.postService
            .GetPosts()
            .subscribe(
            s => {
                this.isPostLoading = false;
                this.posts = s;
            },
            err => console.error(err));
    }

}