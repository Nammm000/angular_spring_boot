import { Component, OnInit } from '@angular/core';
import { Diary } from './models/diary';
import { DiaryService } from './services/diary.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit() {
  }
}
