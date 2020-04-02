import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MerchComponent } from './merch/merch.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MediaComponent } from './media/media.component';
import { GalleryComponent } from './media/gallery/gallery.component';
import {CrystalLightboxModule} from "@crystalui/angular-lightbox";
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { PresskitComponent } from './presskit/presskit.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MerchComponent,
    MediaComponent,
    GalleryComponent,
    BioComponent,
    ContactComponent,
    EventsComponent,
    PresskitComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CrystalLightboxModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
