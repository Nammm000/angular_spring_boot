import { Component, OnInit } from '@angular/core';
import { Diary } from 'src/app/models/diary';
import { DiaryService } from 'src/app/services/diary.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-diarys',
  templateUrl: './diarys.component.html',
  styleUrls: ['./diarys.component.css']
})
export class DiarysComponent implements OnInit {

  public diarys: Diary[];
  public editDiary: Diary;
  public deleteDiary: Diary;

  constructor(private diaryService: DiaryService){}

  ngOnInit() {
    this.getDiarys();
  }

  public getDiarys(): void {
    this.diaryService.getDiarys().subscribe(
      (response: Diary[]) => {
        this.diarys = response; //return array of Diarys
        //console.log(this.diarys);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public setDeleteDiary(diary: Diary){
    this.deleteDiary = diary;
  }

  public setUpdateDiary(diary: Diary){
    this.editDiary = diary;
  }

  public setDiarys(diary: Diary[]){
    this.diarys = diary;
    if (diary == null) {
      this.getDiarys();
    }
  }

  public onAddDiary(addForm: NgForm): void {
    document.getElementById('add-diary-form').click();
    this.diaryService.addDiary(addForm.value).subscribe(
      (response: Diary) => {
        console.log(response);
        this.getDiarys();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateDiary(diary: Diary): void {
    this.diaryService.updateDiary(diary).subscribe(
      (response: Diary) => {
        console.log(response);
        this.getDiarys();
      },
      (error: HttpErrorResponse) => {
        console.log("loix xoas response");
        alert(error.message);
      }
    );
  }

  public onDeleteDiary(diaryId: number): void {
    this.diaryService.deleteDiary(diaryId).subscribe(
      (response: void) => {
        console.log("xoas "+response);
        // this.ngOnInit();
        this.getDiarys();
        //this.appComponent.getDiarys();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
