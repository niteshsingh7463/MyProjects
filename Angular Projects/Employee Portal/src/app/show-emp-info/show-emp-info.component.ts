import { Router } from '@angular/router';

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-show-emp-info',
  templateUrl: './show-emp-info.component.html',
  styleUrls: ['./show-emp-info.component.css']
})
export class ShowEmpInfoComponent implements OnInit {
  @Output() emitBtnChange = new EventEmitter();
  @Input() pageNum;
  @Input() arr;

  constructor(private router: Router) { }

  ngOnInit() {

  }
  btn(i) {
    this.emitBtnChange.emit(i);
  }
}
