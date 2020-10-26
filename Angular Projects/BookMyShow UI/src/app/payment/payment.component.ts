import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  displayData = null;
  constructor(private _location: Location, private authService: AuthService, private router: Router) { }
  currDate = new Date();
  ngOnInit() {
    this.displayData = this.authService.paymentData;
    this.navigateFun();
  }
  backClicked() {
    this._location.back();
  }


  navigateFun() {
    if (this.displayData == null) {
      console.log('worked');
      this.router.navigate(['']);
    }

  }
}
