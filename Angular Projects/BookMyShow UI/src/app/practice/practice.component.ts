import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  d = new Date();
  constructor() { }

  ngOnInit() {
    // console.log(typeof (this.d.getDate()))
  }

}
