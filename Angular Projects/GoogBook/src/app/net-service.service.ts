import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetServiceService {

  constructor(private httpclient: HttpClient) { }


  getData(url) {
    return this.httpclient.get(url)


  }
}
