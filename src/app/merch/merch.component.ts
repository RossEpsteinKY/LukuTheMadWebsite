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
      spotify: 'https://open.spotify.com/album/2t4dez6tVU8WK3uzX66eIU',
      applemusic: 'https://music.apple.com/us/album/songs-from-the-briarwood/1502365122?uo=4&app=music&at=1001lry3&ct=dashboard',
    },

    {name: 'From Under The Northern Lights',
      img: '../../assets/images/albumart/northernlights.png',
      itunes: 'https://music.apple.com/us/album/from-under-the-northern-lights/1503456053?uo=4&app=itunes&at=1001lry3&ct=dashboard',
      spotify: 'https://open.spotify.com/album/6Jg9Og4Hron4Rhj1Bps2tK',
      applemusic: 'https://music.apple.com/us/album/from-under-the-northern-lights/1503456053?uo=4&app=music&at=1001lry3&ct=dashboard',
      iheart: 'https://www.iheart.com/artist/id-34164718/albums/id-97000661',
    },

    {name: "We're All Going To Helheim (EXPLICIT)",
      img: '../../assets/images/albumart/helheim.png',
      itunes: 'https://music.apple.com/us/album/were-all-going-to-helheim/1503931963?uo=4&app=itunes&at=1001lry3&ct=dashboard',
      spotify: 'https://open.spotify.com/album/7r7OlhNgtVy3UxvFWnZJ7l',
      applemusic: 'https://music.apple.com/us/album/were-all-going-to-helheim/1503931963?uo=4&app=music&at=1001lry3&ct=dashboard',
      iheart: 'https://www.iheart.com/artist/id-34164718/albums/id-97236389',
    },
    {name: "Ragnarokin Out",
      img: '../../assets/images/albumart/ragnarokin.png',
      itunes: 'https://music.apple.com/us/album/ragnarokin-out/1515476769?uo=4&app=itunes&at=1001lry3&ct=dashboard',
      spotify: 'https://open.spotify.com/album/741eKAWcrPen9KGJU9xasp',
      applemusic: 'https://music.apple.com/us/album/ragnarokin-out/1515476769?uo=4&app=music&at=1001lry3&ct=dashboard',
      iheart: 'https://www.iheart.com/artist/id-34164718/albums/id-103128945',
    },
    {name: "Pissed Drunk & Pissed Off",
      img: '../../assets/images/albumart/pisseddrunk.png',
      itunes: 'https://music.apple.com/us/album/pissed-drunk-pissed-off/1563884170',
      spotify: 'https://open.spotify.com/album/6M26SbAI5RltFHYuhBrdn1',
      applemusic: 'https://music.apple.com/us/album/pissed-drunk-pissed-off/1563884170',
      iheart: 'https://www.iheart.com/artist/luku-the-mad-skald-34164718/albums/pissed-drunk-pissed-off-132042515/',
    },
  ]

  ngOnInit() {
  }

}
