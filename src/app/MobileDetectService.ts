import {Component, OnInit} from '@angular/core';


export class MobileDetectService implements OnInit {

  public isMobileBrowser;



  ngOnInit() {
    this.mobileCheck();

  }

  public mobileCheck() {


    innerWidth = window.innerWidth;
    if (innerWidth <= 1024) {
      this.isMobileBrowser = true;
      return this.isMobileBrowser;

    }

    if (innerWidth >= 1024) {
      this.isMobileBrowser = false;
      return this.isMobileBrowser;
    }


  }

}
