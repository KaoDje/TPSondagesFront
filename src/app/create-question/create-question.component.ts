import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../../models/question.models';
import { CreateSondageComponent } from '../create-sondage/create-sondage.component';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrl: './create-question.component.scss',
})
export class CreateQuestionComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<Question>();

  intitule: string = '';
  typeReponse!: 'ouverte' | 'qcm';
  reponses: string[] = [];

  ngOnInit(): void {}

  addReponse() {
    const reponse = document.getElementById('textReponse') as HTMLInputElement;
    this.reponses.push(reponse.value);
    reponse.value = '';
  }

  onSubmit() {
    console.log(this.intitule, this.typeReponse, this.reponses);
    this.messageEvent.emit(
      new Question('0', this.intitule, this.typeReponse, this.reponses)
    );
  }
}
