import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "/sign-up", signupRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "/authenticate", loginRequest)
  }

  logout(): Observable<any> {
    //console.log(this.createAuthorizationHeader());
    return this.http.post(BASE_URL + "/user/logout", {}, {
      headers: this.createAuthorizationHeader()
    });
  }

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      return new HttpHeaders().append(
        'Authorization', 'Bearer ' + jwtToken
      )
      // return new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   'Authorization': 'Bearer ' + jwtToken
      // });
    } else {
      console.log("JWT token not found in the Local Storage");
    }
    return null;
  }

}