import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MerchComponent} from "./merch/merch.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'merch', component: MerchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
