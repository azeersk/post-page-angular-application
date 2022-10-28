import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/posts.model';
import { MypostService } from '../mypost.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private myPostService:MypostService ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  posts:Posts[]=[];

  getPosts(){
    this.myPostService.getPosts().subscribe(
      data=>{
        this.posts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }
}
