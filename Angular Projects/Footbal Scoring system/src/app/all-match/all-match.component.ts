import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-match',
  templateUrl: './all-match.component.html',
  styleUrls: ['./all-match.component.css']
})
export class AllMatchComponent implements OnInit {
  @Input() allMatches;
  constructor() { }

  ngOnInit() {
  }

}
