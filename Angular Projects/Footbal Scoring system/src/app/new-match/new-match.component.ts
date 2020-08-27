import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {
  @Input() teamList;
  @Output() startMatchEvent = new EventEmitter<string[]>();
  constructor() { }

  ngOnInit() {
  }
  team1 = null;
  team2 = null;

  optClicked1(i) {
    this.team1 = this.teamList[i]
  }

  optClicked2(i) {
    this.team2 = this.teamList[i]
  }
  startMatch() {
    if (this.team1 == null) {
      alert('Select Team 1');
    } else if (this.team2 == null) {
      alert('Select Team 2');
    }
    else if (this.team1 == this.team2) {
      alert('Select different teams');
    }
    else {
      this.startMatchEvent.emit([this.team1, this.team2]);
    }
  }
}
