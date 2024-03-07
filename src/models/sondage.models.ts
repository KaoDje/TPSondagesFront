import { Question } from './question.models';

export class Sondage {
  constructor(
    public id: string,
    public nom: string,
    public questions: Question[]
  ) {}
}
