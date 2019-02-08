import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchFromApiService {

  constructor( private http:HttpClient) { }


  searchMusic(nameOfthesong):any{
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${nameOfthesong}&api_key=3b920f5e4bee2291feda876c0598107c&format=json`)
  }
  trendingSong():any
  {
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=34c0d1d6c0886560e6fd3c2e0ebc55c2&format=json")
  }
  getFromApi1()
  {
    return this.http.get("http://localhost:5555/posts")
  }
  getFromApi2()
  {
    return this.http.get("http://localhost:5555/comments")
  }
}
