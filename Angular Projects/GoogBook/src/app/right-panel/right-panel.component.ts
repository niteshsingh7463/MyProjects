import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
  @Input() allData;
  @Input() startIndex;
  @Input() maxResults;
  @Input() endIndex;
  @Input() prevBool;


  @Output() pageFunEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  pageFun(i) {
    this.pageFunEvent.emit(i);
  }
}
