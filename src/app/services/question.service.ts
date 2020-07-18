import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question, QuestionDto, Type, Difficulty } from '../model/question';
import { Observable } from 'rxjs';

let serviceEndpoint: string = 'https://opentdb.com/api.php';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Array<Question>

  constructor(private http: HttpClient) { }

  loadQuestions(dto: QuestionDto): Observable<Array<Question>> {
    let request: string = `${serviceEndpoint}?amount=${dto.numberOfQuestions}&category=${dto.category}&difficulty=${dto.difficulty}&type=${dto.type}`;
    console.log(request);
    return this.http.get<Array<Question>>(request);
  }
  
}
