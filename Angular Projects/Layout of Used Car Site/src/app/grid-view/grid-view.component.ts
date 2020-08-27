import { NetService } from './../net.service';
import { carData } from './../myData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  carData = carData;
  constructor(private netService: NetService) { }

  ngOnInit() {
  }
  showDetails(i) {
    this.netService.getDetails(i);
  }
}
