import { Component, OnInit } from '@angular/core';

// import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido al cine' ;

  constructor() { }

  ngOnInit() {
  }

}
