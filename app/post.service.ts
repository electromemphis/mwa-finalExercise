import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  constructor(public http:Http) { }

  getPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
  }

}
