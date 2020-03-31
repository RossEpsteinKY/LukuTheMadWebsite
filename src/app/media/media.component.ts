import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  public galleryThumbs = [
    {name: 'Indiana Renaissance Festival 2019', url: '../../assets/images/galleries/irf2019/irf19thumb.jpg'},
  ];
  public irf2019 = [
    {thumb: false, url: '../../assets/images/galleries/irf2019/irf19thumb.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
