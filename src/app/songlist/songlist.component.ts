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
        "Chandler’s Wife",
  "Twilight of the Thunder God",
  "Lifeblood",
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
  "The Truth About The Vikings (original)"];

  public bawdySongs = [
    "Oreiley’s Daughter",
    "First Of May",
    "XY(ZED)",
    "Big Bosomed Girls",
    "Betty West (original)",
    "Mingulay Corpse Song (original)",
    "How the Money Rolls In",
    "The Scottsman",
    "The Widow and the Devil",
    "Charlotte The Harlot",
    "Johnny Be Fair",



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




  }





}
