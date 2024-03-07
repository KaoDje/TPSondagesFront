import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sondage } from '../../models/sondage.models';

@Component({
  selector: 'app-sondage-overview',
  templateUrl: './sondage-overview.component.html',
  styleUrl: './sondage-overview.component.scss',
})
export class SondageOverviewComponent implements OnInit {
  @Input() sondage!: Sondage;

  ngOnInit(): void {}

  constructor(private router: Router) {}

  onClick() {
    console.log(this.sondage);
    this.router.navigateByUrl('/sondages/' + this.sondage.id);
  }
}
