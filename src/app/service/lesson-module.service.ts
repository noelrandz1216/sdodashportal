import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8082/api/lesson-module';

@Injectable({
  providedIn: 'root'
})
export class LessonModuleService {

  constructor(private httpClient: HttpClient) {
  }

  getLessonModules(parameter: string, data?: any): Observable<any> {
    const url = `${baseUrl}/${parameter}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    let params = new HttpParams();
    if (data !== undefined) {
      Object.keys(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.httpClient.get(url, {
      responseType: 'json',
      headers: headers,
      params: params
    });
  }

    // const parameter = 'list';  // Adjust based on your API endpoint
    //       const queryParams = {
    //         subject: "Mathematics",
    //         gradeLevel: "Grade 1"
    //       };

    // this.lessonModuleService.getLessonModules(parameter, queryParams).subscribe(
    //   (response) => {
    //     console.log('Response:', response);
    //     // Handle the response here
    //   },
    //   (error) => {
    //     console.error('Error:', error);
    //     // Handle the error here
    //   }
    // );
}
