import { NetService } from './../net.service';
import { carData } from './../myData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {
  carData = carData;
  constructor(private netService: NetService) { }

  ngOnInit() {

  }
  showDetails(i) {
    this.netService.getDetails(i);
  }
}
