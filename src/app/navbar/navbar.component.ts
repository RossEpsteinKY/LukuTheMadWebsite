import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public socialMedia = [
    {name: 'facebook', url: 'https://www.facebook.com/LukuTheMad', faIcon: 'fa-facebook'},
    {name: 'instagram', url: 'https://www.instagram.com/lukuthemad/', faIcon: 'fa-instagram'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
