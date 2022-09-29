import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Game {
  _id: number;
  platform: string;
  title: string;
  description: string;
  genre: string;
  thumbnailUrl: string;
  metaScore:number;
  userScore:number;
  releaseDate:string;
}

@Injectable({
  providedIn: 'root'
})

export class GameCrudService {

  endpoint = 'http://localhost:8080/gameCollection';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createGame(game: Game): Observable<any> {
    return this.httpClient.post<Game>(this.endpoint, JSON.stringify(game), this.httpOptions)
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
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(game), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Game updated: ${id}`)),
        catchError(this.handleError<Game[]>('Update game'))
      );
  }

  deleteGame(id): Observable<Game[]> {
    return this.httpClient.delete<Game[]>(this.endpoint + '/' + id, this.httpOptions)
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