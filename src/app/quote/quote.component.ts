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
      new Quote(1,'H.R','Don’t wait. Make memories today. Celebrate your life!','James'  ),
      new Quote(2,'M.Y','Life has no limitations, except the ones you make.','John'),
      new Quote(3,'M.T','We learn by mistakes','charlene'),
      new Quote(4,'R.E','Do what is right, not what is easy nor what is popular.','walter'),
      new Quote(5,'W.T','Success is not how high you have climbed, but how you make a positive difference to the world.','Aine')
    
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
  
  