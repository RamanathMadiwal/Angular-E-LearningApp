import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './components/profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './components/main/main.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { LearningmoduleComponent } from './components/learningmodule/learningmodule.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { DummytestComponent } from './dummytest/dummytest.component';
import { CustomSnackBarComponent } from './components/custom-snack-bar/custom-snack-bar.component';
import { CustomDialogComponent } from './components/custom-dialog/custom-dialog.component';
import { TableBasicExampleComponent } from './components/table-basic-example/table-basic-example.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollingComponent } from './components/virtual-scrolling/virtual-scrolling.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MainComponent,
    HomepageComponent,
    QuizComponent,
    LearningmoduleComponent,
    HeaderComponent,
    DummytestComponent,
    CustomSnackBarComponent,
    CustomDialogComponent,
    TableBasicExampleComponent,
    VirtualScrollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomSnackBarComponent, CustomDialogComponent]
})
export class AppModule {}
