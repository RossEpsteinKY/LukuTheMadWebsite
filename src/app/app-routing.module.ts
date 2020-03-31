import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MerchComponent} from "./merch/merch.component";
import {MediaComponent} from "./media/media.component";
import {GalleryComponent} from "./media/gallery/gallery.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'merch', component: MerchComponent},
  { path: 'media', component: MediaComponent},
  { path: 'media/gallery/:name', component: GalleryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
