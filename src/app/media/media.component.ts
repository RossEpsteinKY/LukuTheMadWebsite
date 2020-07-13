import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  public galleryThumbs = [
    {name: 'Kentucky Highland Renaissance Festival 2020', url: '../../assets/images/galleries/thumbs/khrf2020_thumb.jpg', link: 'khrf20'},
    {name: 'Indiana Renaissance Festival 2019', url: '../../assets/images/galleries/thumbs/irf19_thumb.jpg', link: 'irf19'},
    {name: 'Kentucky Highland Renaissance Festival 2019', url: '../../assets/images/galleries/thumbs/khrf19_thumb.jpg', link: 'khrf19'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
