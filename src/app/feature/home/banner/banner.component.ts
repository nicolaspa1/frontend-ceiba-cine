import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;

  images: string[] = [
    '../../assets/img/black-widow.jpg',
    '../../assets/img/space-jam.jpg',
    '../../assets/img/tuve-fe.jpg',
    '../../assets/img/z.jpg',
    '../../assets/img/angel-de-mi-vida.jpg',
  ];

  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }
}
