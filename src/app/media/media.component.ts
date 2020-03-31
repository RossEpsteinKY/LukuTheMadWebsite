import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  public galleryThumbs = [
    {name: 'Indiana Renaissance Festival 2019', url: '../../assets/images/galleries/irf2019/irf19thumb.jpg', link: 'irf19'},
    {name: 'Kentucky Highland Renaissance Festival 2019', url: '../../assets/images/galleries/khrf2019/luku1_khrf19.jpg', link: 'khrf19'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
