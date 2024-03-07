import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Question } from '../../models/question.models';
import { Sondage } from '../../models/sondage.models';

@Injectable({
  providedIn: 'root',
})
export class SondagesService {
  sondages!: Sondage[];
  // [
  //   new Sondage(0, 'Sondage Préférences Alimentaires', [
  //     new Question(0, 'Quel est votre plat préféré ?', 'ouverte', []),
  //     new Question(1, 'Quels types de cuisine préférez-vous ?', 'qcm', [
  //       'Italienne',
  //       'Chinoise',
  //       'Mexicaine',
  //       'Indienne',
  //     ]),
  //   ]),
  //   new Sondage(1, 'Sondage sur les Habitudes de Transport', [
  //     new Question(
  //       2,
  //       'Quel est votre moyen de transport préféré ?',
  //       'ouverte',
  //       []
  //     ),
  //     new Question(
  //       3,
  //       'Combien de fois par semaine utilisez-vous les transports en commun ?',
  //       'qcm',
  //       ['Jamais', '1 à 3 jours par semaine', 'Plus de 3 jours par semaine']
  //     ),
  //   ]),
  // ];

  constructor(private http: HttpClient) {}

  getAllSondages() {
    return this.http.get<Sondage[]>('http://localhost:3000/sondages').pipe(
      map((data) =>
        data.map(
          (item) =>
            new Sondage(
              item.id,
              item.nom,
              item.questions.map(
                (q) =>
                  new Question(
                    q.id,
                    q.intitule,
                    q.type,
                    q.reponses ? q.reponses.map((r) => r.intitule) : []
                  )
              )
            )
        )
      )
    );
  }

  // getSondageById(id: number) {
  //   console.log(id);
  //   return this.sondages.find((sondage) => sondage.id == id);
  // }

  addSondage(sondage: Sondage) {
    this.sondages.push(sondage);
  }
}
