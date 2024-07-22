import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Diary } from '../models/diary';
import { DiaryService } from './diary.service';

@Injectable({
  providedIn: 'root'
})
export class DiarysService {
  private diarys: BehaviorSubject<Diary[]> = new BehaviorSubject<Diary[]>(null);
  public diarys$: Observable<Diary[]> = this.diarys.asObservable();

  constructor(private diaryService: DiaryService) { }

  public updateDiarys(update) {
    this.diarys.next(update);
  }

  ngOnInit() {
    this.getDiarys();
  }

  public getDiarys(): void {
    this.diaryService.getDiarys().subscribe(
      (response: Diary[]) => {
        this.updateDiarys(response); //return array of diarys
        console.log(this.diarys);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
