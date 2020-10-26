import { baseUrl } from './../myData';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private _location: Location) { }
  allData6: any = null;
  allSeatData: any = [];
  currDate = new Date();

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "December"];

  dateArr = [this.currDate.getDate() + ' TODAY', this.currDate.getDate() + 1 + ' ' + this.months[this.currDate.getMonth()], this.currDate.getDate() + 2 + ' ' + this.months[this.currDate.getMonth()]]

  allSeatDataUrl = 'https://us-central1-bkyow-22da6.cloudfunctions.net/app/seats';
  allData6Url = baseUrl;
  city = null;
  movieIndex = null;
  cinemaHallIndex = null;
  timeBtnIndex = null;
  dayIndex = null;
  upperSeat = null;
  lowerSeat = null;
  totalTicketCount = 0;
  totalTicketPrice = 0;
  totalTicketArr = [];

  ngOnInit() {
    this.route.paramMap.subscribe(resp => {

      // this.allSeatData = this.authService.allSeatData5;
      // console.log('allSeatData::>', this.allSeatData);
      this.city = resp.get('city');
      this.movieIndex = resp.get('movieIndex');
      this.cinemaHallIndex = resp.get('cinemaHallIndex');
      this.timeBtnIndex = resp.get('timeBtnIndex');
      this.dayIndex = resp.get('dateIndex');
      this.allData6 = this.authService.allData5;
      console.log('allData5onSeatPG::>', this.allData6);
      this.getAllData();
      this.navigateFun();

    })

  }


  getAllData() {
    this.authService.getData(this.allSeatDataUrl).subscribe(data => { this.allSeatData = data; this.seatUpdate(); })

    // this.authService.getData(this.allData6Url + this.city).subscribe(data => { this.allData6 = data; })

  }

  backClicked() {
    this._location.back();
    this.seatUpdate();
  }
  seatUpdate() {
    console.log('seat update worked');
    let allSeatData2 = [...this.allSeatData];
    this.lowerSeat = allSeatData2[(this.timeBtnIndex) % 3].seats;
    console.log('lowerSeat::>', this.lowerSeat);
    this.upperSeat = allSeatData2[(this.timeBtnIndex) % 3].seats;

    console.log('upperSeat::>', this.upperSeat);
    console.log('lowerSeat2::>', this.lowerSeat);
    this.totalTicketCount = 0;
    this.totalTicketPrice = 0;
    this.totalTicketArr = [];
  }

  navigateFun() {
    if (this.allData6 == null) {
      console.log('worked');
      this.router.navigate(['']);
    }

  }
  timeBtn(w: HTMLElement, o: number) {
    console.log(w)
    this.timeBtnIndex = w;
    this.getAllData();
  }

  totalTicket1(rowNo, seatNo) {
    console.log('seatNo::>', seatNo);
    console.log('rowNo::>', rowNo);
    let seatPos = this.upperSeat[rowNo].seatList[seatNo].booked;
    console.log('seatPos1::>', seatPos)
    this.upperSeat[rowNo].seatList[seatNo].booked = !this.upperSeat[rowNo].seatList[seatNo].booked;
    let seatPos2 = this.upperSeat[rowNo].seatList[seatNo].booked;

    console.log('seatPos2::>', seatPos2)
    this.totalTicketCount += seatPos2 ? 1 : -1;
    this.totalTicketPrice += seatPos2 ? 420 : -420;
    if (seatPos2) {
      this.totalTicketArr.push(this.upperSeat[rowNo].rowName + '' + this.upperSeat[rowNo].seatList[seatNo].seatNo);
    } else {
      let index1 = this.totalTicketArr.findIndex(n1 => n1 == this.upperSeat[rowNo].rowName + '' + this.upperSeat[rowNo].seatList[seatNo].seatNo)
      this.totalTicketArr.splice(index1, 1);
    }

    console.log('totalticketArr::>', this.totalTicketArr);
    console.log('totalTicketCount::>', this.totalTicketCount);
    // console.log(this.allSeatData)
  }

  totalTicket2(rowNo, seatNo) {
    console.log('seatNo::>', seatNo);
    console.log('rowNo::>', rowNo);
    let seatPos = this.lowerSeat[rowNo].seatList[seatNo].booked;
    console.log('seatPos1::>', seatPos)
    this.lowerSeat[rowNo].seatList[seatNo].booked = !this.lowerSeat[rowNo].seatList[seatNo].booked;
    let seatPos2 = this.lowerSeat[rowNo].seatList[seatNo].booked;

    console.log('seatPos2::>', seatPos2)
    this.totalTicketCount += seatPos2 ? 1 : -1;
    this.totalTicketPrice += seatPos2 ? 250 : -250;
    if (seatPos2) {
      this.totalTicketArr.push(this.lowerSeat[rowNo].rowName + '' + this.lowerSeat[rowNo].seatList[seatNo].seatNo);
    } else {
      let index1 = this.totalTicketArr.findIndex(n1 => n1 == this.lowerSeat[rowNo].rowName + '' + this.lowerSeat[rowNo].seatList[seatNo].seatNo)
      this.totalTicketArr.splice(index1, 1);
    }

    console.log('totalticketArr::>', this.totalTicketArr);
    console.log('totalTicketCount::>', this.totalTicketCount);
    console.log(this.allSeatData)
  }
  paymentBtn() {
    let title1 = this.allData6.title;
    let movieHall1 = this.allData6.showTiming[this.dayIndex][this.cinemaHallIndex].name;
    let tickets1 = this.totalTicketArr;
    let amount1 = this.totalTicketPrice;
    let time1 = this.allData6.showTiming[this.dayIndex][this.cinemaHallIndex].timings[this.timeBtnIndex].name;
    let date1 = +(this.currDate.getDate()) + +this.dayIndex + ' ' + this.months[this.currDate.getMonth()];


    let body = {
      title: title1,
      movieHall: movieHall1,
      tickets: tickets1,
      amount: amount1,
      time: time1,
      date: date1
    };
    let postUrl = 'https://us-central1-bkyow-22da6.cloudfunctions.net/app/seat';
    console.log(this.router.url);
    this.authService.postData(postUrl, body).subscribe(resp => { console.log('PostResponse::>', resp) })
    this.authService.paymentData = body;
    this.seatUpdate();

  }
}
