import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiaryService } from './services/diary.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AddButtonComponent } from './components/diarys/add-button/add-button.component';
import { TopBarComponent } from './components/diarys/top-bar/top-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { InforTagComponent } from './components/diarys/infor-tag/infor-tag.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DiarysComponent } from './components/diarys/diarys.component';
import { DiaryComponent } from './components/diary/diary.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';

//import {  MatAutocompleteModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AddButtonComponent,
    TopBarComponent,
    SearchBarComponent,
    InforTagComponent,
    SignupComponent,
    LoginComponent,
    DiarysComponent,
    DiaryComponent,
    ForgotPasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DiaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
