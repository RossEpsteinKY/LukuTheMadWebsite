import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presskit',
  templateUrl: './presskit.component.html',
  styleUrls: ['./presskit.component.scss']
})
export class PresskitComponent implements OnInit {

  public mainPhoto = '../assets/images/promo/luku_promo_1.jpg';

  public promoPhotos = [
    {url: '../assets/images/promo/luku_promo_1.jpg'},
    {url: '../assets/images/promo/luku_promo_2.jpg'},
    {url: '../assets/images/promo/luku_promo_3.jpg'},
    {url: '../assets/images/promo/luku_promo_4.jpg'},
    {url: '../assets/images/promo/luku_promo_5.jpg'},
    {url: '../assets/images/promo/luku_promo_6.jpg'},
    {url: '../assets/images/promo/luku_promo_7.jpg'},
    {url: '../assets/images/promo/luku_promo_8.jpg'},
    {url: '../assets/images/promo/luku_promo_9.jpg'},
    {url: '../assets/images/promo/luku_promo_10.jpg'},
    {url: '../assets/images/promo/luku_promo_logo.png'},
    {url: '../assets/images/promo/luku_promo_logo_small.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
