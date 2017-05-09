import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import * as Rx          from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User }         from './user';

@Injectable()
export class UserServices {
    private _urlBase = 'https://jsonplaceholder.typicode.com/';
    private _http: Http;

    constructor(private http: Http) {
        this._http = http;
    }
    getUser(): Rx.Observable<User[]> {
        return this._http
            .get(this._urlBase + 'users')
            .map(res => <User[]>res.json());
    }
    saveUser(user: User): Rx.Observable<Response> {
        return this._http
            .post(this._urlBase + 'users', JSON.stringify(user))
            .map(res => res.json());

    }
}