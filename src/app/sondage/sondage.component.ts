import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sondage } from '../../models/sondage.models';
import { SondagesService } from '../services/sondages.service';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrl: './sondage.component.scss',
})
export class SondageComponent implements OnInit {
  sondage!: Sondage;

  constructor(
    private sondagesService: SondagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    // const sondage = this.sondagesService.getSondageById(id);
    // if (sondage) {
    //   this.sondage = sondage;
    // }
  }

  onSubmit() {
    const reponses = this.sondage.questions.map((question) => {
      // Supposons que chaque question a un type et une réponse ou des réponses associées
      if (question.type === 'ouverte') {
        // Retourne un objet pour une question ouverte
        return {
          question: question.intitule,
          reponse: question.reponseOuverte,
        };
      } else if (question.type === 'qcm') {
        // Retourne un objet pour une question de type QCM
        const reponsesCochees = question.reponses
          .filter((reponse) => reponse.checked) // Assurez-vous que 'checked' est défini dans votre modèle de données
          .map((reponse) => reponse.intitule);
        return { question: question.intitule, reponses: reponsesCochees };
      }
      // Retourne une valeur par défaut si aucun des cas ci-dessus n'est rencontré
      return { question: question.intitule, reponse: null };
    });
    console.log(reponses);
  }

  navHome() {
    this.router.navigateByUrl('/');
  }
}
