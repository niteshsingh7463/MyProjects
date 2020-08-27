import { NetService } from './../net.service';
import { adBanner } from './../myData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adBanner = adBanner;
  constructor(private netService: NetService) { }
  carDetailBool = false;
  ngOnInit() {
    this.netService.cardetailEventObs$.subscribe(data => { this.carDetailBool = !this.carDetailBool; })
  }

}
