import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Diary } from 'src/app/models/diary';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() diaryss: Diary[] | undefined;
  @Output() diarys = new EventEmitter<Diary[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public searchDiarys(key: string): void {
    console.log(key);
    const results: Diary[] = [];
    //const temp: Diary[] = this.diaryss;
    for (const diary of this.diaryss) {
      if (diary.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
      // || diary.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      // || diary.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || diary.content.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(diary);
      }
    }
    //this.diarys = results;
    this.diarys.emit(results);
    if (results.length === 0 || !key) {
      this.diarys.emit(null);
    }
  }

}
