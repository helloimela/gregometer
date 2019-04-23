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
  meter : string;
  show : boolean = false;

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

    if(this.totalQ == this.questions.length){
      if(this.totalScore <= 126) {
        this.finalStatus = 'Ah...Not that I dont like your tastes, we could still be friend of course';
        this.meter = 'low';
      } else if( this.totalScore < 251 && this.totalScore >= 126 ) {
        this.finalStatus = 'Hmmm... Though we have different tastes, but there are few things we have in common :)';
        this.meter = 'medium';
      } else if( this.totalScore < 376 && this.totalScore >= 251 ) {
        this.finalStatus = 'We have common tastes, we could talk about a lot of things!';
        this.meter = 'high';
      } else if(this.totalScore >= 376) {
        this.finalStatus = 'Super! Are you my long lost twins?';
        this.meter = 'super';
      }
    }
  }

  showPicture() {
    this.show = true;
  }

  ngOnInit() {

  }

}
