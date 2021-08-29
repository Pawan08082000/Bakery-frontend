import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  slides = [
    {
      image:
        'https://susiecakes.com/app/uploads/2016/01/SC-June-2017-banners-key-lime-pie.jpg',
      title: 'KEY LIME PIE IS BACK!',
      class: 'cakelimepie',
    },
    {
      image: 'https://susiecakes.com/app/uploads/2021/07/SC-Whoopie-Slider.jpg',
      title: 'Whoopie!',
      class: 'whoopie',
    },
    {
      image:
        'https://susiecakes.com/app/uploads/2016/01/SC-august-2016-bannersstrawberry-shortcake.jpg',
      title: 'Summer Berry Cake',
      class: 'cakeberry',
    },
    {
      image:
        'https://susiecakes.com/app/uploads/2021/07/SC-Lemon-CC-Slider.jpg',
      title: 'LEMON CUPCAKES',
      class: 'cupcake',
    },
    {
      image: 'https://susiecakes.com/app/uploads/2021/07/SC-Rose-Slider-a.jpg',
      title: 'STRAWBERRY ROSÉ CUPCAKES',
      class: 'rose',
    },
  ];
}
