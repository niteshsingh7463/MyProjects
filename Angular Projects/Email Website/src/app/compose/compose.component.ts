import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  @Output() sentArr = new EventEmitter;
  @Input() to;
  @Input() subject;

  msg = null;
  id = 289;
  constructor() { }

  ngOnInit() {
  }
  sendComposed() {
    this.id += 1;
    let p1 = { id: this.id, sent: true, from: 'jack@test.com', to: this.to, subject: this.subject, text: this.msg, folder: 'Sent', selected: false };
    this.sentArr.emit(p1);
    // console.log(p1.text.split('\n'));
  }
}
