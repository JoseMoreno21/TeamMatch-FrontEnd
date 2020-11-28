import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {FreeTournament} from '../models/free-tournament';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpFreeTournamentService {
  basePath = 'http://localhost:3000/api/organizers';
  baseTournament = 'free-tournaments';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  // API Error Handling
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  getListByOrganizerId(id): Observable<FreeTournament>{
    return this.http.get<FreeTournament>(`${this.basePath}/${id}/${this.baseTournament}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }

}
