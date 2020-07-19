import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { QuestionDto, Question } from 'src/app/model/question';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  questions: Question[] = [];

  ngOnInit(): void {
    this.questionService
    .loadQuestions(10, 11, 'medium', 'multiple')
    .subscribe((data: Question[]) => this.questions = this.questions.concat(data));
  }

}
