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
      spotify: 'https://open.spotify.com/album/2t4dez6tVU8WK3uzX66eIU',
      applemusic: 'https://music.apple.com/us/album/songs-from-the-briarwood/1502365122?uo=4&app=music&at=1001lry3&ct=dashboard',
    },

    {name: 'From Under The Northern Lights',
      img: '../../assets/images/albumart/northernlights.png',
      itunes: 'https://music.apple.com/us/album/from-under-the-northern-lights/1503456053?uo=4&app=itunes&at=1001lry3&ct=dashboard',
      googleplay: 'https://play.google.com/store/music/album/Luku_the_Mad_Skald_From_Under_the_Northern_Lights?id=Bkolpkcmwp5whsx54x554tsgxfm',
      spotify: 'https://open.spotify.com/album/6Jg9Og4Hron4Rhj1Bps2tK',
      applemusic: 'https://music.apple.com/us/album/from-under-the-northern-lights/1503456053?uo=4&app=music&at=1001lry3&ct=dashboard',
      iheart: 'https://www.iheart.com/artist/id-34164718/albums/id-97000661',
    },

    {name: "We're All Going To Helheim (EXPLICIT)",
      img: '../../assets/images/albumart/helheim.png',
      itunes: 'https://music.apple.com/us/album/were-all-going-to-helheim/1503931963?uo=4&app=itunes&at=1001lry3&ct=dashboard',
      googleplay: 'https://play.google.com/store/music/album/Luku_the_Mad_Skald_We_re_All_Going_to_Helheim?id=Biqlqonktbko4uutoinxw755l2a',
      spotify: 'https://open.spotify.com/album/7r7OlhNgtVy3UxvFWnZJ7l',
      applemusic: 'https://music.apple.com/us/album/were-all-going-to-helheim/1503931963?uo=4&app=music&at=1001lry3&ct=dashboard',
      iheart: 'https://www.iheart.com/artist/id-34164718/albums/id-97236389',
    },
    {name: "Ragnarokin Out (Coming Soon)",
      img: '../../assets/images/albumart/ragnarokin.png',
      itunes: 'https://music.apple.com/us/album/songs-from-the-briarwood/1502365122?uo=4&app=itunes&at=1001lry3&ct=dashboard'
    },
  ]

  ngOnInit() {
  }

}
