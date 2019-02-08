import { Component, OnInit } from '@angular/core';
import { FetchFromApiService} from '../fetch-from-api.service'
import{HttpClient} from '@angular/common/http'
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor( private _fetchFromApi:FetchFromApiService,private http:HttpClient, private router:Router) { }
arrayOfMusic:any=[]
  ngOnInit() {
  
    this._fetchFromApi.getFromApi1().subscribe(data=>
      {
        console.log(data)
        this.arrayOfMusic=data
      })
      this.getfromApi2here()
  }
  arrayOfMusic2:any=[]
  getfromApi2here()
  {
    this._fetchFromApi.getFromApi2().subscribe(data=>
      {
        console.log(data);
        this.arrayOfMusic2=data;
      })
  }

  removeArrayData(music)
  {
    this.http.delete("http://localhost:5555/posts/"+music)
    .subscribe(console.log)
    this.arrayOfMusic=this.arrayOfMusic.filter(data=>music!=data.id)
  }
  removeArrayData2(music)
  {
    this.http.delete("http://localhost:5555/comments/"+music)
    .subscribe(console.log)
    this.arrayOfMusic2=this.arrayOfMusic2.filter(data=>music!=data.id)
  }
  routeTodetail(music) {
    console.log(music.name)
    this.router.navigateByUrl(`detail/${music.name}`)
  }


}
