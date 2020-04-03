import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppComponent} from "../app.component";
import {MobileDetectService} from "../MobileDetectService";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public mobileCheck: MobileDetectService) { }

  public innerWidth;

  public isMobile;

  public isMenuCollapsed = true;



  ngOnInit() {


    this.isMobile = this.mobileCheck.mobileCheck();

    console.log('testing', this.isMobile);

    //
    // this.innerWidth = window.innerWidth;
    //
    //
    // if (this.innerWidth <= 1140) {
    //   this.isMobile = true;
    // }
    //

  }

}
