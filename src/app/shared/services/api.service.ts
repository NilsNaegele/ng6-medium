import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  constructor(private http: HttpClient) { }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`,
                          JSON.stringify(body),
                          {headers: this.setHeaders() }).pipe(
                          catchError(this.formatErrors),
                          map((response: HttpResponse<any>) => response));
  }

}
