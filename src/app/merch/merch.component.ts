import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.scss']
})
export class MerchComponent implements OnInit {

  constructor() { }

  public albums = [
    {name: 'Songs From The Briarwood',
      img: '../../assets/images/albumart/briarwood.png',
      itunes: 'https://music.apple.com/us/album/songs-from-the-briarwood/1502365122?uo=4&app=itunes&at=1001lry3&ct=dashboard'
    },

    {name: 'From Under The Northern Lights',
      img: '../../assets/images/albumart/northernlights.png',
      itunes: 'https://music.apple.com/us/album/songs-from-the-briarwood/1502365122?uo=4&app=itunes&at=1001lry3&ct=dashboard'
    },

    {name: "We're All Going To Helheim (EXPLICIT)",
      img: '../../assets/images/albumart/helheim.png',
      itunes: 'https://music.apple.com/us/album/songs-from-the-briarwood/1502365122?uo=4&app=itunes&at=1001lry3&ct=dashboard'
    },
  ]

  ngOnInit() {
  }

}
