
import { Movie } from './model/movie.model';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // @Output() senddata = new EventEmitter();
  public movies: any = [];

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {

  }
  // ngOnInit(){
  //   this.getMovies();
  //   this.senddata.emit(this.movies);

  // }
  //   getdata() : any{
  //  return this.getMovies()
  //   }

  getMovies(): Observable<any> {
    const subUrl: any = 'https://www.omdbapi.com/?s=batman&apikey=9fa6058b';

    return this.http.get(subUrl).pipe(map(res => {

      this.movies = res;

      return this.movies;

    })

    );
  }


  // getMovieById(imdbID:string) {
  //   return this.http.get<Movie[]>(imdbID);
  // }

  // getAll(): Movie[]{
  //   return this.movies.slice();
  // }


  //  update(id, entry: any) {
  //     const idx = this.movies.findIndex(m => id === m.imdbID);
  //     if (idx > -1) {
  //       this.movies[idx] = entry;
  //     }
  //   }

  add(movie: Movie) {
    if (movie) {
      this.movies.Search.push(movie);
      this.messageSource.next(this.movies.Search);
    }
  }


}
