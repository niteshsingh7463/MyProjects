import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp-options',
  templateUrl: './emp-options.component.html',
  styleUrls: ['./emp-options.component.css']
})
export class EmpOptionsComponent implements OnInit {
  @Input() designation;
  @Input() department;
  @Output() emitChangeEmpOpt = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  emitChange() {
    this.emitChangeEmpOpt.emit();

  }
}
