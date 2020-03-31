import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  public irf2019 = [
    {url: '../../assets/images/galleries/irf2019/irf19_luku1.jpg'},
    {url: '../../assets/images/galleries/irf2019/irf19_luku2.jpg'},
    {url: '../../assets/images/galleries/irf2019/irf19_luku3.jpg'},
    {url: '../../assets/images/galleries/irf2019/irf19_luku4.jpg'},

  ];

  public khrf19 = [
    {url: '../../assets/images/galleries/khrf2019/luku1_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku2_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku3_khrf19.jpg'},
  ];

  public galleryName ='';

  public activeGallery;

  ngOnInit() {
    const gallery = this.route.snapshot.paramMap.get('name');



    if(gallery === 'irf19' ){
      this.activeGallery = this.irf2019;
      this.galleryName = "Indiana Renaissance Faire 2019";
    }

    if(gallery === 'khrf19' ){
      this.activeGallery = this.khrf19;
      this.galleryName = "Kentucky Highland Renaissance Festival 2019";
    }

    console.log('GALLERY IS', this.activeGallery);


  }

}
