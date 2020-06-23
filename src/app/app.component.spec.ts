import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {MerchComponent} from './merch/merch.component';
import {MediaComponent} from './media/media.component';
import {GalleryComponent} from './media/gallery/gallery.component';
import {BioComponent} from './bio/bio.component';
import {ContactComponent} from './contact/contact.component';
import {EventsComponent} from './events/events.component';
import {PresskitComponent} from './presskit/presskit.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
      declarations: [
        RouterTestingModule,
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'LukuSiteAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('LukuSiteAngular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to LukuSiteAngular!');
  });
});
