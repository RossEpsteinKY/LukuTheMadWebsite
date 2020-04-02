import {Component, OnInit} from '@angular/core';
import {faFontAwesome} from "@fortawesome/free-brands-svg-icons";
import {isBoolean} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LukuSiteAngular';

  public isMobile = false;

  public innerWidth;

  fa = faFontAwesome;
  ngOnInit() {

      document.body.classList.add('bg-img');

      this.innerWidth = window.innerWidth;


      if (this.innerWidth <= 1024) {
        this.isMobile = true;
      }




    }
}
