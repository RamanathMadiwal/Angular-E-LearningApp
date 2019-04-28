import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MainComponent } from './components/main/main.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { LearningmoduleComponent } from './components/learningmodule/learningmodule.component';
import { HeaderComponent } from './components/navigation/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MainComponent,
    HomepageComponent,
    QuizComponent,
    LearningmoduleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule
  ],
  exports: [MatTabsModule, MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
