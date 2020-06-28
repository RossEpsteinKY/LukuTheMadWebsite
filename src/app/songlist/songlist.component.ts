import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.scss']
})
export class SonglistComponent implements OnInit {

  constructor() { }


  public cleanSongs = [
    "Black Velvet Band",
    "Drunken Lullabies",
    "Twilight of the Thunder God",
    "Lifeblood (A Viking Drinking Song)",
    "A Song For Odin",
    "Mari Mac",
    "Whiskey In The Jar",
    "I’s The By",
    "Isn’t It Grand Boys?",
    "Captain Kidd",
    "Run Run Away",
    "Nancy Whiskey",
    "Tell Me Ma",
    "Yggdrasil",
    "Fields of Gold",
    "If I Should Fall From Grace With God",
    "Wild Mountain Thyme",
    "Mingulay Boat Song",
    "Galway Girl",
    "The Truth About The Vikings (original)",
    "Places Unseen (original)",
    "Rais Your Horns To The Sky (original)",
    "Of Silk And Fine Furs",
    "Loch Lomond",
    "Paddy West",
    "Under The Glow (original)",


  ];

  public bawdySongs = [
    "O'reiley’s Daughter",
    "First Of May",
    "XY(ZED)",
    "Chandler’s Wife",
    "Big Bosomed Girls",
    "Betty West (original)",
    "Mingulay Corpse Song (original)",
    "How the Money Rolls In",
    "The Scottsman",
    "The Widow and the Devil",
    "Charlotte The Harlot",
    "Johnny Be Fair",
    "Grandfather's Song",
    "Boned Her In The Alley (original)",
    "To Hell With The Company (original)",
];

  public stories = [
    "The Tale Of Ymir",
    "Tale of Yggdrasil",
    "The Marriage of Njord and Skadi",
    "The Creation of Sleipnir"
  ];


  public kidsSongs = [
    "You're Welcome",
    "Part Of Your World",

];


  ngOnInit() {

    this.cleanSongs.sort(function(a, b){
      if (a < b) { return -1; }
      if (a > b) { return 1; }
      return 0;
    });

    this.bawdySongs.sort(function(a, b){
      if (a < b) { return -1; }
      if (a > b) { return 1; }
      return 0;
    });

    this.kidsSongs.sort(function(a, b){
      if (a < b) { return -1; }
      if (a > b) { return 1; }
      return 0;
    });

    this.stories.sort(function(a, b){
      if (a < b) { return -1; }
      if (a > b) { return 1; }
      return 0;
    });




  }





}
