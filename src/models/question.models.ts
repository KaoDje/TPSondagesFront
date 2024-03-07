export class Question {
  intitule: string;
  type: string;
  reponseOuverte!: string;
  reponses: { intitule: string; checked: boolean }[] = [];
  constructor(
    public id: string,
    intitule: string,
    type: string,
    reponses: string[]
  ) {
    this.intitule = intitule;
    this.type = type;
    reponses.forEach((reponse) => {
      this.reponses.push({ intitule: reponse, checked: false });
    });
  }
}
