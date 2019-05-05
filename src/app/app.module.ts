import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './components/profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './components/main/main.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { LearningmoduleComponent } from './components/learningmodule/learningmodule.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { DummytestComponent } from './dummytest/dummytest.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MainComponent,
    HomepageComponent,
    QuizComponent,
    LearningmoduleComponent,
    HeaderComponent,
    DummytestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
