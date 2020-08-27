import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() teams;
  @Output() matchevent = new EventEmitter();
  team1Score = 0;
  team2Score = 0;
  constructor() { }

  ngOnInit() {
  }
  goalScore1() {
    this.team1Score += 1;
  }
  goalScore2() {
    this.team2Score += 1;
  }
  matchOver() {
    this.matchevent.emit([this.team1Score, this.team2Score]);
  }
}
