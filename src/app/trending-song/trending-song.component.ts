import { Component, OnInit } from '@angular/core';
import { FetchFromApiService} from '../fetch-from-api.service'
import {HttpClient} from '@angular/common/http'
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-trending-song',
  templateUrl: './trending-song.component.html',
  styleUrls: ['./trending-song.component.css']
})
export class TrendingSongComponent implements OnInit {

  constructor(private _fetchFromApi :FetchFromApiService, private http :HttpClient, private router:Router) { }

  ngOnInit() {
    this.getMusic()
  }
  trendingArray
  getMusic()
  {
    this._fetchFromApi.trendingSong().subscribe(data=>{
      console.log(data)
      this.trendingArray=data.tracks.track
    })
  }

    
onclick(name)
{
  this.http.post("http://localhost:5555/comments",{name})
  .subscribe(console.log)
}
routeTodetail(music) {
  console.log(music.name)
  this.router.navigateByUrl(`detail/${music.name}`)
}

}
