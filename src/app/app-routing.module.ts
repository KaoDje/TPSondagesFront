import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSondageComponent } from './create-sondage/create-sondage.component';
import { HomeComponent } from './home/home.component';
import { SondageComponent } from './sondage/sondage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sondages', component: HomeComponent },
  { path: 'sondages/:id', component: SondageComponent },
  { path: 'create-sondage', component: CreateSondageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
