import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosectionComponent } from './herosection/herosection.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ContentIrrevelantComponent } from './content-irrevelant/content-irrevelant.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HerosectionComponent},
  {path:"favourite",component:FavouriteComponent},
  {path:"detail/:id",component:DetailsComponent},
  {path:"**",component:ContentIrrevelantComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
