import { NetServiceService } from './net-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { RightPanelComponent } from './right-panel/right-panel.component';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    SearchPageComponent,
    ResultPageComponent,
    HomePageComponent,
    LeftPanelComponent,
    RightPanelComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
