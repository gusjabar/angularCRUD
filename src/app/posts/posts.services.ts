import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from './post';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsServices {
    private _urlBase = 'https://jsonplaceholder.typicode.com/';
    private _http: Http;

    constructor(private http: Http) {
        this._http = http;
    }

    GetPosts(): Rx.Observable<Post[]> {
        return this._http
            .get(this._urlBase + 'posts')
            .map(result => {
                console.log(result);
                return <Post[]>result.json();
            });
    }

    GetPost(id: number): Rx.Observable<Post> {
        return this._http
            .get(this._urlBase + 'posts/' + id)            
            .map(result => {
                console.log(result);
                return <Post>result.json();
            });
    }

}
