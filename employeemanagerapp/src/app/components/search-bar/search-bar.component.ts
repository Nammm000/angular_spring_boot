//import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Diary } from 'src/app/models/diary';
import { DiarysService } from 'src/app/services/diarys.service';
//import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  // @Input() diaryss: Employee[] | undefined;
  // @Output() diarys = new EventEmitter<Employee[]>();

  constructor(private diarysService: DiarysService){}

  ngOnInit() {
  }

}
