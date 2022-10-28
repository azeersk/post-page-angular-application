import { Component, OnInit } from '@angular/core';
import { Users } from 'src/user.model';
import { MypostService } from '../mypost.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private myPostService:MypostService ) { }

  ngOnInit(): void {
    this.getDetails();
  }

  userD:Users[]=[];

  getDetails(){
    this.myPostService.getDetails().subscribe(
      data=>{
        this.userD = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
