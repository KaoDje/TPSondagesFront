import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sondage } from '../../models/sondage.models';
import { SondagesService } from '../services/sondages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  sondages!: Sondage[];
  sondages$!: Observable<Sondage[]>;

  constructor(
    private sondagesService: SondagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sondages = this.sondagesService.sondages;
    this.sondagesService.getAllSondages().subscribe((data) => {
      this.sondages = data;
      console.log(this.sondages);
    });
  }

  onCreateSondage() {
    console.log('New');
    this.router.navigateByUrl('/create-sondage');
  }
}
