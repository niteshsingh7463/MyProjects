import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetService {
  carIndex: string;
  cardetailEvent = new Subject();
  cardetailEventObs$ = this.cardetailEvent.asObservable();
  constructor() { }
  getDetails(i) {
    this.carIndex = i;
    this.cardetailEvent.next();
  }
  goHome() {

    this.cardetailEvent.next();

  }
}
