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
    {url: '../../assets/images/galleries/khrf2019/luku4_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku5_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku6_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku7_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku8_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku9_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku10_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku11_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku12_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku13_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku14_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku15_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku16_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku17_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku18_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku19_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku20_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku21_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku22_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku23_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku24_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku25_khrf19.jpg'},

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