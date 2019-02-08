import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ContentIrrevelantComponent } from './content-irrevelant/content-irrevelant.component';
import { FetchFromApiService} from "./fetch-from-api.service";
import { HttpClientModule }    from '@angular/common/http';
import { TrendingSongComponent } from './trending-song/trending-song.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HerosectionComponent,
    FavouriteComponent,
    ContentIrrevelantComponent,
    TrendingSongComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchFromApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
