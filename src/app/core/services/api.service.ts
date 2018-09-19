import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtService } from './jwt.service';




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
    return throwError(error.error);
  }

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params })
                    .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`,
                          JSON.stringify(body),
                          {headers: this.setHeaders() }).pipe(
                          catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`,
                          JSON.stringify(body),
                          {headers: this.setHeaders() }).pipe(
                          catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`)
                    .pipe(catchError(this.formatErrors));
  }

}
