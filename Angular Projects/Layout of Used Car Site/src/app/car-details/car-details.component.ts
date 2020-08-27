import { carData, carouselImages, carDesc } from './../myData';
import { NetService } from './../net.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  adBanner = 'https://i.imgur.com/KMj5eG7.png';
  seller = 'https://i.imgur.com/xLaJmx3.png';
  showIndex: any;
  carData = carData;
  carouselImages = carouselImages;
  carDesc = carDesc;
  constructor(private netService: NetService) { }

  ngOnInit() {
    this.showIndex = this.netService.carIndex;
    this.showIndex = +this.showIndex - 1;
    // console.log(this.showIndex)
  }
  gotoHome() {
    this.netService.goHome();
  }
}
