import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Game } from '../model/game';



@Injectable({
  providedIn: 'root'
})

export class GameCrudService {

  endpoint = 'http://localhost:8080/gameCollection';


  constructor(private httpClient: HttpClient) { }

  createGame(game: Game): Observable<any> {
    return this.httpClient.post<Game>(this.endpoint, game)
      .pipe(
        catchError(this.handleError<Game>('Error occured'))
      );
  }

  getGame(id): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Game fetched: ${id}`)),
        catchError(this.handleError<Game[]>(`Get Game id=${id}`))
      );
  }

  getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.endpoint)
      .pipe(
        tap(games => console.log('Games retrieved!')),
        catchError(this.handleError<Game[]>('Get game', []))
      );
  }

  updateGame(id, game: Game): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, game)
      .pipe(
        tap(_ => console.log(`Game updated: ${id}`)),
        catchError(this.handleError<Game[]>('Update game'))
      );
  }

  deleteGame(id): Observable<Game[]> {
    return this.httpClient.delete<Game[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Game deleted: ${id}`)),
        catchError(this.handleError<Game[]>('Delete game'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
  
}