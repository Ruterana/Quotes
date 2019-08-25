import { Component, OnInit,Input } from '@angular/core';
import {  Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  constructor() { }

  ngOnInit() {
  }

}


// import { Component, OnInit, Input } from '@angular/core';
// import { Goal } from '../goal';

// @Component({
//   selector: 'app-goal-detail',
//   templateUrl: './goal-detail.component.html',
//   styleUrls: ['./goal-detail.component.css']
// })
// export class GoalDetailComponent implements OnInit {

//   @Input() goal: Goal;
//   constructor() { }

//   ngOnInit() {
//   }

// }


