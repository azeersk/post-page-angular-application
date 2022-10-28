import { Component } from '@angular/core';
import { Posts } from 'src/posts.model';
import { MypostService } from './mypost.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-page-application';
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
