import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diary } from '../models/diary';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class DiaryService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getDiarys(): Observable<Diary[]> {
    return this.http.get<Diary[]>(`${this.apiServerUrl}/user/diary/all`, {
      headers: this.createAuthorizationHeader()
    });
  }

  public addDiary(diary: Diary): Observable<Diary> {
    return this.http.post<Diary>(`${this.apiServerUrl}/user/diary/add`, diary, {
      headers: this.createAuthorizationHeader()
    });
  }

  public updateDiary(diary: Diary): Observable<Diary> {
    console.log("update " + diary.id);
    return this.http.put<Diary>(`${this.apiServerUrl}/user/diary/update`, diary, {
      headers: this.createAuthorizationHeader()
    });
  }

  public deleteDiary(diaryId: number): Observable<void> {
    console.log("delete " + diaryId);
    return this.http.delete<void>(`${this.apiServerUrl}/user/diary/delete/${diaryId}`, {
      headers: this.createAuthorizationHeader()
    });
  }

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      return new HttpHeaders().append(
        'Authorization', 'Bearer ' + jwtToken
      )
    } else {
      console.log("JWT token not found in the Local Storage 123");
    }
    return null;
  }

}
