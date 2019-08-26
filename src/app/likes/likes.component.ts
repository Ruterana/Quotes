import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
like=0
upvotes(){
  this.like=this.like+1;  
}
unlike=0
downvote(){
  this.unlike=this.unlike+1;
}
  constructor() { }

  ngOnInit() {
  }

}
