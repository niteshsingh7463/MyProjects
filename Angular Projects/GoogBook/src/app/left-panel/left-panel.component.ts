import { NetServiceService } from './../net-service.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  @Output() radioChange = new EventEmitter();
  @Input() language;
  @Input() filter;
  constructor(private netservice: NetServiceService) { }

  ngOnInit() {
  }
  btnChange() {

    this.radioChange.emit();

  }
}
