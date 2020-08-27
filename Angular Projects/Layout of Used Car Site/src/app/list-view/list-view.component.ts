import { NetService } from './../net.service';
import { carData } from './../myData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  carData = carData;

  constructor(private netService: NetService) { }

  ngOnInit() {
  }

  showDetails(i) {
    this.netService.getDetails(i);
  }
}
