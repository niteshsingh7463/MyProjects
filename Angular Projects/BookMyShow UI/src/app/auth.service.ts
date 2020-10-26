
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatusObs = new Subject<boolean>();
  loginStatusObs$ = this.loginStatusObs.asObservable();
  allData5: any = null;
  allSeatData5: any = null;
  topbarBool = true;
  paymentData: any = null;

  constructor(private httpClient: HttpClient) {

  }
  topbarBoolFun(n) {
    if (n == 1) {
      this.topbarBool = true;
    } else { this.topbarBool = false; }
    this.loginStatusObs.next(this.topbarBool);
  }
  getData(url) {
    return this.httpClient.get(url);
  }
  postData(url, data) {
    return this.httpClient.post(url, data);
  }

}
