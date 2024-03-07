import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../models/question.models';
import { Sondage } from '../../models/sondage.models';
import { SondagesService } from '../services/sondages.service';

@Component({
  selector: 'app-create-sondage',
  templateUrl: './create-sondage.component.html',
  styleUrl: './create-sondage.component.scss',
})
export class CreateSondageComponent implements OnInit {
  sondage!: Sondage;
  isAddingQuestion: boolean = false;
  receivedQuestion!: Question;
  constructor(
    private sondagesService: SondagesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.sondage = new Sondage('0', '', []);
  }
  addQuestion() {
    this.isAddingQuestion = true;
  }
  receiveQuestion(question: Question) {
    this.sondage.questions.push(question);
    this.isAddingQuestion = false;
  }
  onSubmit() {
    this.sondage.nom = (
      document.getElementById('title') as HTMLInputElement
    ).value;
    this.sondagesService.addSondage(this.sondage);
    this.router.navigateByUrl('/');
  }
}
