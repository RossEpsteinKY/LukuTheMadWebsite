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
      itunes: 'https://music.apple.com/us/album/songs-from-the-briarwood/1502365122?uo=4&app=itunes&at=1001lry3&ct=dashboard',
      googleplay: 'https://play.google.com/store/music/album/Luku_the_Mad_Skald_Songs_from_the_Briarwood?id=Bpnuw4ixndwu5oq2upj37r6jwoa',
      spotify: 'https://open.spotify.com/album/2t4dez6tVU8WK3uzX66eIU'
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
