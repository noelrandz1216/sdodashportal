import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

const baseUrl = 'http://localhost:8081/api/teacher';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {

  private loggedIn = false;

  constructor(private httpClient: HttpClient) {
  }

  getSubjectGradelevels(parameter: string,  data?: any): Observable<any>{
    const url = `${baseUrl}/${parameter}`;
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.httpClient.get(url, {
      responseType: 'json',
      headers: headers,
      params
     });
  }

  getTokenPayload(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error("Failed to decode token", error);
      return null;
    }
  }

  getEmailFromToken(token: string): string | null {
    const payload = this.getTokenPayload(token);
    if (payload && payload.email) {
      return payload.email;
    }
    return null;
  }

}


