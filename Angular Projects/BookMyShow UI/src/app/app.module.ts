import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { PracticeComponent } from './practice/practice.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PaymentComponent } from './payment/payment.component'

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    TicketBookingComponent,
    PracticeComponent,
    SeatBookingComponent,
    TopbarComponent,
    PaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
