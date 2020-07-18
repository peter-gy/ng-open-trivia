import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { QuestionDto, Type, Difficulty } from 'src/app/model/question';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    let dto: QuestionDto = 
    {
      numberOfQuestions: 10,
      category: 11,
      difficulty: Difficulty.EASY,
      type: Type.MULTIPLE
    }
    this.questionService.loadQuestions(dto).subscribe(e => console.log(e));
  }

}
