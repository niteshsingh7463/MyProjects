import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {

  allData: any = null;
  url1 = 'https://us-central1-bkyow-22da6.cloudfunctions.net/app/movies/';
  currDate = new Date();
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oct", "November", "December"];
  currShows: any = null;
  displayCurrShows: any = null;


  filterPriceOpts = ['Rs. 101-200', 'Rs. 201-300', 'Rs. 301-350', 'More than 300'];
  filterShowTimeOpts = ['Morning', 'Afternoon', 'Evening', 'Night'];

  filterShowTimeOptsStruct = null;
  filterPriceOptsStruct = null;
  dayIndex = 0;
  allSeatDataUrl = 'https://us-central1-bkyow-22da6.cloudfunctions.net/app/seats';


  constructor(private authService: AuthService, private route: ActivatedRoute) { }
  city = null;
  movieIndex = null;
  dateArr = [this.currDate.getDate() + ' ' + 'TODAY', (this.currDate.getDate() + 1) + ' ' + this.months[this.currDate.getMonth()], (this.currDate.getDate() + 2) + ' ' + this.months[this.currDate.getMonth()]]
  ngOnInit() {
    this.authService.topbarBoolFun(1);
    this.route.paramMap.subscribe(resp => { this.city = resp.get('city'); this.movieIndex = resp.get('movieindex') })
    this.filterPriceOptsStruct = this.constructStructure(this.filterPriceOpts);
    this.filterShowTimeOptsStruct = this.constructStructure(this.filterShowTimeOpts);
    this.authService.getData(this.url1 + this.city + '/' + this.movieIndex).subscribe(data => { this.allData = data; console.log(this.allData); this.currShows = this.allData.showTiming[this.dayIndex]; console.log('dayindex::', this.dayIndex); this.displayCurrShows = this.currShows; this.authService.allData5 = data; })

  }
  constructStructure(arr) {
    return arr.map(n1 => ({ name: n1, isSelected: false }));
  }
  dayBtn(n) {
    this.dayIndex = n;
    console.log('dayindex', this.dayIndex);
    this.currShows = this.allData.showTiming[this.dayIndex];
    this.displayCurrShows = this.currShows;

    console.log('Currshows==>', this.allData);
  }
  heartBtn(i) {

    // console.log('HTML ele:',i.id);
    if (i.id == 'heartcss-false') {
      i.id = 'heartcss-true';
    } else { i.id = 'heartcss-false'; }
  }
  filterOpts() {
    // console.log('filterOpts::>', this.filterPriceOptsStruct, this.filterShowTimeOptsStruct)
    let arr = this.currShows;
    console.log(arr)
    let selPriceOpts = this.filterPriceOptsStruct.filter(n1 => n1.isSelected == true);
    let selShowTimeOpts = this.filterShowTimeOptsStruct.filter(n1 => n1.isSelected == true);
    for (let i = 0; i < selPriceOpts.lenght; i++) {
      return null;
    }

  }
  topbarBool() {
    this.authService.topbarBoolFun(0);
  }
}
