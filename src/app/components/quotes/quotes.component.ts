import { Component, OnInit } from '@angular/core';
import { Quote } from './../../models/Quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


quotes?:Quote[];

inputQuote:string = "";

  constructor() { }

  ngOnInit(): void {
    this.quotes = [
      {
        content:'first quote',
        completed: true
      },
      {
        content:'second quote',
        completed: true
      },
      {
        author:'any'
      }
    ]
  
  }

  toggleDone (id:number) {
    this.quotes?.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteQuote ( id: number ) {
    this.quotes = this.quotes?.filter((v, i) => i !== id );
  }

  addQuote () {
    this.quotes?.push({
      content: this.inputQuote,
      completed:false
    })
    this.inputQuote = ""
  } 
 

   
  numberOfLikes : number = 0;

  likeButtonClick() {
    this.numberOfLikes++;
  }
  dislikeButtonClick(){
    this.numberOfLikes--;
  }
}
