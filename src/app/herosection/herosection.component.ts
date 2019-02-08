import { Component, OnInit } from '@angular/core';
import { FetchFromApiService } from '../fetch-from-api.service';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'


@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.css']
})
export class HerosectionComponent implements OnInit {

  constructor(private _fetchFromApi: FetchFromApiService,private http: HttpClient, private router:Router ) { }
  arrayOfMusic: any=[];
  inputText= "";

  ngOnInit() { 
  }
  getMusic()
  {
    this._fetchFromApi.searchMusic(this.inputText).subscribe(data=>{
      console.log(data);
      this.arrayOfMusic=data.results.trackmatches.track;
      })
}
isHere=true
hideTrending()
{
  this.isHere=false
}

onclick(name)
{
  this.http.post("http://localhost:5555/posts",{name})
  .subscribe(console.log)
}
routeTodetail(music) {
  console.log(music.name)
  this.router.navigateByUrl(`detail/${music.name}`)
}

}
