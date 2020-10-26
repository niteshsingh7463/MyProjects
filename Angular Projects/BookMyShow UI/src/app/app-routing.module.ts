import { PaymentComponent } from './payment/payment.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/:city',
    component: HomeComponent,
    pathMatch: 'full'
  }, {
    path: 'bookMovie/:city/:movieIndex/buyTicket/:cinemaHallIndex/:timeBtnIndex/:dateIndex',
    component: SeatBookingComponent,
    pathMatch: 'full'
  }, {
    path: 'bookMovie/:city/:movieindex',
    component: TicketBookingComponent,
    pathMatch: 'full'
  }, {
    path: 'payment',
    component: PaymentComponent,
    pathMatch: 'full'
  }
  , {
    path: '',
    redirectTo: 'home/NCR',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
