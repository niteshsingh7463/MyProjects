import { MatchComponent } from './match/match.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teamarr = null;
  title = 'Lesson';
  allTeams = ["France", "England", "Brazil", "Germany", "Argentina"];
  newmatchComponent = false;
  matchComponent = false;
  scorearr = null;
  numberOfMatches = 0;
  AllMatches = [];
  allmatchComponent = false;
  pointsTable = [];
  ptbool = false;


  newmatch() {
    this.newmatchComponent = true;
    this.allmatchComponent = false;
    this.ptbool = false;
  }


  teamEvent(teams) {
    this.teamarr = teams;
    this.matchComponent = true;
    this.newmatchComponent = null;
  }

  matchEvent(scores) {
    this.scorearr = scores;

    this.matchComponent = false;
    this.newmatchComponent = false;
    this.numberOfMatches += 1;
    let p1 = { teams: this.teamarr, scores: this.scorearr };
    this.AllMatches.push(p1);
  }
  allMatches() {
    this.allmatchComponent = true;
    this.ptbool = false;
    this.newmatchComponent = false;
  }
  pointsTablefun() {

    this.newmatchComponent = false;
    this.allmatchComponent = false;
    this.ptbool = true;
    this.pointsTable = [];
    for (let i = 0; i < this.allTeams.length; i++) {
      let team = this.allTeams[i];
      let played = 0;
      let won = 0;
      let lost = 0;
      let drawn = 0;
      let goalsFor = 0;
      let goalsAgainst = 0;
      for (let i = 0; i < this.AllMatches.length; i++) {
        if (this.AllMatches[i].teams[0] == team || this.AllMatches[i].teams[1] == team) {
          played += 1;
          if (this.AllMatches[i].teams[0] == team) {
            goalsFor += this.AllMatches[i].scores[0];
            goalsAgainst += this.AllMatches[i].scores[1];
            if (this.AllMatches[i].scores[0] > this.AllMatches[i].scores[1]) {
              won += 1;
            } else if (this.AllMatches[i].scores[0] < this.AllMatches[i].scores[1]) {
              lost += 1;
            } else { drawn += 1 }
          }
          else if (this.AllMatches[i].teams[1] == team) {
            goalsFor += this.AllMatches[i].scores[1];
            goalsAgainst += this.AllMatches[i].scores[0];
            if (this.AllMatches[i].scores[1] > this.AllMatches[i].scores[0]) {
              won += 1;
            } else if (this.AllMatches[i].scores[1] < this.AllMatches[i].scores[0]) {
              lost += 1;
            } else { drawn += 1 }

          }
        }
      }


      let p2 = { Team: team, Played: played, Won: won, Lost: lost, Drawn: drawn, GoalsFor: goalsFor, GoalsAgainst: goalsAgainst, Points: (won * 3 + drawn) }
      this.pointsTable.push(p2);
    }
  }
  btnSortEvent(p1) {
    if (p1 == 'Team')
      this.pointsTable.sort((a, b) => a.Team.localeCompare(b.Team));
    if (p1 == 'Played')
      this.pointsTable.sort((a, b) => b.Played - a.Played);
    if (p1 == 'Won')
      this.pointsTable.sort((a, b) => b.Won - a.Won);
    if (p1 == 'Lost')
      this.pointsTable.sort((a, b) => b.Lost - a.Lost);
    if (p1 == 'Drawn')
      this.pointsTable.sort((a, b) => b.Drawn - a.Drawn);
    if (p1 == 'GoalsFor')
      this.pointsTable.sort((a, b) => b.GoalsFor - a.GoalsFor);
    if (p1 == 'GoalsAgainst')
      this.pointsTable.sort((a, b) => b.GoalsAgainst - a.GoalsAgainst);
    if (p1 == 'Points')
      this.pointsTable.sort((a, b) => b.Points - a.Points);





  }
}

