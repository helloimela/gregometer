import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { QUESTIONS } from '../questions';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  n : number = 0;
  totalQ : number = 0;
  questions = QUESTIONS;
  myArray : Item;
  activeItem : number;
  totalScore : number = 0;
  finalStatus : string;

  constructor() { }

  startQuiz(id: Item) {
    this.myArray = id;
    this.totalQ += 1;

  }

  saveAnswer(score) {
    this.activeItem = score;
    this.totalScore += score;
    setTimeout(() => {
      this.n += 1;
      this.totalQ += 1;
      this.myArray = this.questions[this.n];
      this.activeItem = 0;
    }, 1000);

    console.log(this.totalQ);
    console.log(this.questions.length+1);

    if(this.totalQ == this.questions.length){
      if(this.totalScore <= 101) {
        this.finalStatus = 'Low compatibility';
      } else if( this.totalScore < 201 && this.totalScore >= 101 ) {
        this.finalStatus = 'Medium compatibility';
      } else if( this.totalScore < 376 && this.totalScore >= 201 ) {
        this.finalStatus = 'High compatibility';
      } else if(this.totalScore >= 376) {
        this.finalStatus = 'Super compatibility';
      }

      console.log(this.finalStatus);
    }
  }

  ngOnInit() {

  }

}
