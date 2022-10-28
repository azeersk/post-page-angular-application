import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from 'src/posts.model';
import { Users } from 'src/user.model';

@Injectable({
  providedIn: 'root'
})
export class MypostService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get<Posts[]>('https://gorest.co.in/public/v2/posts?page=1');
  }
  getDetails(){
    return this.http.get<Users[]>('https://gorest.co.in/public/v2/comments?post_id=1545');
  }
}
