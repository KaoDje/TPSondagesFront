import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../models/question.models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent implements OnInit {
  @Input() question!: Question;
  reponse: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
