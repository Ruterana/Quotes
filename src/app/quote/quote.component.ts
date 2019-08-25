import { Component, OnInit } from '@angular/core';
import{Quote}from '../quote';
// import { globalAgent } from 'https';
// import { from } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit{
  quotes:Quote[] = [
      new Quote(1,'H.R','Don’t wait. Make memories today. Celebrate your life!','Mark Twain',new Date(1998,3,2)  ),
      new Quote(2,'M.Y','Life has no limitations, except the ones you make.','John',new Date(2018,2,4)),
      new Quote(3,'M.T','We learn by mistakes','charlene',new Date(2017,4,6)),
      new Quote(4,'R.E','Do what is right, not what is easy nor what is popular.','walter',new Date(1997,1,5)),
      new Quote(5,'W.T','Success is not how high you have climbed, but how you make a positive difference to the world.','Aine',new Date(2019,8,5))
    
    ];
    toggleDetails(index){
      this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    }
    deleteQuote(isDelete, index){
      if (isDelete) {
        this.quotes.splice(index,1);
      }
    }
    constructor() { }

    ngOnInit() {
    }
  
  }
  
  