import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  public khrf2021 = [
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_1.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_2.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_3.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_4.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_5.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_6.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_7.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_8.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_9.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_10.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_11.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_12.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_13.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_14.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_15.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_16.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_17.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_18.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_19.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_20.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_21.jpg'},
    {url: '../../assets/images/galleries/khrf2021/Luku_Khrf_2021_22.jpg'},
    // {url: '../../assets/images/galleries/khrf2021/Luku_and_Ulfhedinn_Immigrant_Song.mp4'},

  ];

  public rh2021 = [
    {url: '../../assets/images/galleries/rh2021/Luku_Robinhood_2021_1.jpg'},
    {url: '../../assets/images/galleries/rh2021/Luku_Robinhood_2021_2.jpg'},
    {url: '../../assets/images/galleries/rh2021/Luku_Robinhood_2021_3.jpg'},
    {url: '../../assets/images/galleries/rh2021/Luku_Robinhood_2021_4.jpg'},
    {url: '../../assets/images/galleries/rh2021/Luku_Robinhood_2021_5.jpg'},
    {url: '../../assets/images/galleries/rh2021/Luku_Robinhood_2021_6.jpg'},
    {url: '../../assets/images/galleries/rh2021/Luku_Robinhood_2021_7.jpg'},
  ];

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
    {url: '../../assets/images/galleries/khrf2019/luku26_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku27_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku28_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku29_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku30_khrf19.jpg'},
    {url: '../../assets/images/galleries/khrf2019/luku31_khrf19.jpg'},

  ];

  public khrf20 = [
    {url: '../../assets/images/galleries/khrf2020/khrf2020_1.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_2.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_3.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_4.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_5.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_6.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_7.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_8.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_9.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_10.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_11.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_12.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_13.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_14.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_15.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_16.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_17.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_18.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_19.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_20.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_21.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_22.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_23.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_24.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_25.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_26.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_27.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_28.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_29.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_30.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_31.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_32.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_33.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_34.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_35.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_36.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_37.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_38.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_39.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_40.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_41.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_42.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_43.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_44.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_45.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_46.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_47.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_48.jpeg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_49.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_50.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_51.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_52.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_53.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_54.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_55.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_56.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_57.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_58.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_59.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_60.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_61.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_62.jpg'},
    {url: '../../assets/images/galleries/khrf2020/khrf2020_63.jpg'},

  ]
  ;

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

    if(gallery === 'khrf20' ){
      this.activeGallery = this.khrf20;
      this.galleryName = "Kentucky Highland Renaissance Festival 2020";
    }

    if(gallery === 'robinct2021' ){
      this.activeGallery = this.rh2021;
      this.galleryName = "Robin Hood's Faire 2021";
    }

    if(gallery === 'khrf2021' ){
      this.activeGallery = this.khrf2021;
      this.galleryName = "Kentucky Highland Renaissance Festival 2021";
    }
    // console.log('GALLERY IS', this.activeGallery);


  }

}
