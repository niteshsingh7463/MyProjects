import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewMatchComponent } from './new-match/new-match.component';
import { MatchComponent } from './match/match.component';
import { AllMatchComponent } from './all-match/all-match.component';
import { PointsTableComponent } from './points-table/points-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NewMatchComponent,
    MatchComponent,
    AllMatchComponent,
    PointsTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
