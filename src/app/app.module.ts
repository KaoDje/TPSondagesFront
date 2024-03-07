import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { CreateSondageComponent } from './create-sondage/create-sondage.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { SondageOverviewComponent } from './sondage-overview/sondage-overview.component';
import { SondageComponent } from './sondage/sondage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SondageOverviewComponent,
    SondageComponent,
    CreateSondageComponent,
    QuestionComponent,
    CreateQuestionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
