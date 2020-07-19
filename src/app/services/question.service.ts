import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question, QuestionDto } from '../model/question';
import { Observable, observable } from 'rxjs';
import { map, merge } from 'rxjs/operators';

let serviceEndpoint: string = 'https://opentdb.com/api.php';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Question[];

  constructor(private http: HttpClient) { }

  loadQuestions(amount: number, category: number, difficulty: string, type: string): Observable<Array<Question>> {
    let request: string = `${serviceEndpoint}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    console.log(request);
    return this.http.get<Question[]>(request).pipe(map((response: any) => <Question[]>response.results));
  }  
  
}