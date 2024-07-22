import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Diary } from 'src/app/models/diary';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-infor-tag',
  templateUrl: './infor-tag.component.html',
  styleUrls: ['./infor-tag.component.css']
})
export class InforTagComponent implements OnInit {

  @Input() diary: Diary | undefined;
  @Output() editDiary = new EventEmitter<Diary>();
  @Output() deleteDiary = new EventEmitter<Diary>();


  constructor(private diaryService: DiaryService){}

  ngOnInit() {
  }

  public onOpenModal(diary: Diary, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'edit') {
      this.editDiary.emit(diary);
      button.setAttribute('data-target', '#updateDiaryModal');
    }
    if (mode === 'delete') {
      this.deleteDiary.emit(diary);
      button.setAttribute('data-target', '#deleteDiaryModal');
    }
    container.appendChild(button);
    button.click();
  }


}
