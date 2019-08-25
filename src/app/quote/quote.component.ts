import { Component, OnInit } from '@angular/core';
import{Quote}from '../quote';
// import { from } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit{
  quotes:Quote[] = [
      {id:1, name:'Don’t wait. Make memories today. Celebrate your life!',author:'James'  },
      {id:2,name:'Life has no limitations, except the ones you make.',author:'John'},
      {id:3,name:'We learn by mistakes',author:'charlene'},
      {id:4,name:'Do what is right, not what is easy nor what is popular.',author:'walter'},
      {id:5,name:'Success is not how high you have climbed, but how you make a positive difference to the world.',author:'Aine'}
    
    ];
    constructor() { }

    ngOnInit() {
    }
  
  }
  
  