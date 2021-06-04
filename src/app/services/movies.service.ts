import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl:string='http://www.omdbapi.com/?apikey=e9fdf890'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }

  searchMovies(search:string):Observable<any>{
    return this.httpClient.get(baseUrl,{params:{s:search}})
  }
  
  getMovieDetails(imdbID:string):Observable<any>{ 
    return this.httpClient.get(baseUrl,{params:{i:imdbID}})
  }
}
