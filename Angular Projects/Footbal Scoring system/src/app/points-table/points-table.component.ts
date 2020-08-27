import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {
  @Output() btnSortEvent = new EventEmitter();
  @Input() PointsTable;
  constructor() { }

  ngOnInit() {
  }
  btnSort(str) {
    this.btnSortEvent.emit(str);
  }
}
